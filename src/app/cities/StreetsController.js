Ext.define('App.cities.StreetsController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.cities-streets',

    requires: [
        'App.cities.StreetCard'
    ],

    control: {
        '#': {
            afterrender: {
                delay: 100,
                fn: function (panel) {
                    var filter = (panel.getDockedItems('panel[dock="top"]') || [])[0];
                    filter = filter ? filter.down('cities-streets-filter') : null;
                    if (filter) {
                        filter.el.on('keypress', function (e) {
                            if (e.keyCode === 13) {
                                var form = filter.getForm(),
                                    values = form.getValues();
                                this.applyFilter(
                                    'filteredStreetName',
                                    values['streetName']
                                );
                                this.applyFilter(
                                    'filteredBuildings',
                                    values['buildings'] === ''
                                        ? null :
                                        +values['buildings']
                                );
                                this.applyFilter(
                                    'filteredMinStreetPopulation',
                                    values['min_street_population'] === ''
                                        ? null
                                        : +values['min_street_population']
                                );
                                this.applyFilter(
                                    'filteredMaxStreetPopulation',
                                    values['max_street_population'] === ''
                                        ? null
                                        : +values['max_street_population']
                                );
                            }
                        }, this, {buffer: 100});
                    }
                }
            }
        }
    },

    applyFilter: function (alias, value) {
        this.getViewModel()
            .set(alias, value);
    },

    removeStreet: function (view, rowIndex, colIndex, button, opts, rec) {
        var streetName = [
            'Наименование: ' + rec.get('name'),
            'Ответственная компания: ' + rec.get('company_name'),
            'Кол-во домов: ' + rec.get('buildings'),
            'Население ~: ' + rec.get('street_population')
        ];

        Ext.MessageBox.confirm(
            'Удалить улицу',
            streetName.join('<br />'),
            function (btn) {
                if (btn !== 'yes') {
                    return;
                }
                var store = this.getView()
                    .lookupViewModel()
                    .getStore('streetsStore');
                store.remove(
                    store.getById(rec.getId())
                );
            },
            this
        );
    },

    afterCellEdit: function (plugin, context) {
        if (context.field === 'company_id') {
            var selectedRecord = plugin.getActiveColumn()
                .getEditor()
                .getSelectedRecord();
            context.record.set('company_name', selectedRecord.get('name'));
        }

        if (!context.record.modified) {
            return;
        }
        var changes = [];
        Ext.Object.each(
            context.record.modified,
            function (key, value) {
                if (key === 'company_id') {
                    return;
                }
                changes.push(
                    Ext.String.format(
                        'До: <span style="color:green">{0}</span><br>После: <span style="color:red">{1}</span>',
                        value,
                        context.record.get(key)
                    )
                );
            },
            this
        );
        Ext.MessageBox.confirm(
            'Сохранить изменения?',
            changes.join('<br />'),
            function (btn) {
                if (btn !== 'yes') {
                    context.record.reject();
                    return;
                }
                context.record.commit();
            },
            this
        );
    },

    addStreet: function () {
        this.getView().up('main-cities').add({
            xtype: 'cities-street-card',
            modal: true,
            width: 500,
            height: 400,
            renderTo: this.getView().up('main-dashboard').el.dom,
            listeners: {
                'onFormSave': function (data) {
                    // vm.get('goodSelection').set(data);
                    // vm.get('goodSelection').commit();
                    // view.refresh();
                    this.close();
                }
            }
        }).show();
    }
});

