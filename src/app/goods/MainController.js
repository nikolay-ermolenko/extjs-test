Ext.define('App.goods.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.main-goods',

    requires: [
        'App.goods.Card'
    ],

    control: {
        '#': {
            afterrender: {
                delay: 100,
                fn: function (panel) {
                    var filter = (panel.getDockedItems('form[dock="top"]') || [])[0],
                        vm = this.getViewModel();

                    if (filter) {
                        filter.el.on('keypress', function (e) {
                            if (e.keyCode === 13) {
                                this.applyFilter(
                                    'filteredId',
                                    vm.get('id') === null
                                        ? null
                                        : +vm.get('id')
                                );
                                this.applyFilter('filteredDescription', vm.get('description'));
                            }
                        }, this, {buffer: 100});
                    }
                }
            },
            cellclick: function (view, td, columnIndex) {
                if (view.getColumnManager().getHeaderAtIndex(columnIndex).dataIndex === 'name') {
                    var vm = this.getViewModel();

                    Ext.create('App.goods.Card', {
                        width: 400,
                        height: 400,
                        minHeight: 400,
                        autoShow: true,
                        modal: true,
                        closeAction: 'destroy',
                        viewModel: {
                            data: {
                                parentId: view.getId()
                            },
                            formulas: {
                                isDirty: {
                                    bind: {
                                        bindTo: '{selectedGood}',
                                        deep: true
                                    },
                                    get: function (selectedGood) {
                                        return selectedGood.dirty;
                                    }
                                },
                                modified: {
                                    bind: {
                                        bindTo: '{selectedGood}',
                                        deep: true
                                    },
                                    get: function (selectedGood) {
                                        return selectedGood.modified;
                                    }
                                }
                            },
                            links: {
                                selectedGood: {
                                    type: 'App.models.Goods',
                                    create: vm.get('goodSelection').getData()
                                }
                            }
                        },
                        listeners: {
                            'onFormSave': function (data, parentId) {
                                vm.get('goodSelection').set(data);
                                Ext.getCmp(parentId)
                                    .grid
                                    .getViewModel()
                                    .getParent()
                                    .getStore('staticStore')
                                    .getById(data.id)
                                    .commit();
                                this.close();
                            }
                        }
                    });
                }
            }
        }
    },

    applyFilter: function (alias, value) {
        this.getViewModel()
            .set(alias, value);
    },

    declension: function(val) {
        return val + ' шт.';
    }
});

