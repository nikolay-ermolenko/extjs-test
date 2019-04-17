Ext.define('App.goods.Main', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.main-goods',

    requires: [
        'App.goods.MainController',
        'App.goods.MainViewModel'
    ],

    controller: 'main-goods',

    viewModel: 'main-goods',

    columns: [
        {
            dataIndex: 'id',
            text: 'ID'
        },
        {
            dataIndex: 'name',
            text: 'Имя',
            flex: 1,
            minWidth: 100
        },
        {
            dataIndex: 'description',
            text: 'Описание',
            flex: 1.5,
            minWidth: 150
        },
        {
            xtype: 'numbercolumn',
            thousandSeparator: ' ',
            format:'0,0.00',
            align: 'right',
            dataIndex: 'price',
            text: 'Цена',
            flex: .5,
            minWidth: 80
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'quantity',
            text: 'Кол-во',
            flex: .5,
            minWidth: 80,
            renderer: function (value, meta) {
                meta.tdStyle = parseInt(value) === 0
                    ? 'background-color:red;'
                    : '';
                return value;
            }
        }
    ],
    bind: {
        selection: '{goodSelection}',
        store: '{localGoodsStore}'
    },
    dockedItems: [{
        xtype: 'form',
        dock: 'top',
        defaultType: 'textfield',
        bodyPadding: 5,
        items: [
            {
                xtype: 'displayfield',
                fieldLabel: 'Найдено',
                bind: '{goodsCount:this.declension()}'
            },
            {
                xtype: 'numberfield',
                allowDecimals: false,
                minValue: 0,
                fieldLabel: 'ID',
                bind: '{id}',
                triggers: {
                    clear: {
                        cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                        weight: -1,
                        hidden: true,
                        handler: function() {
                            this.setValue(null);
                            this.lookupController()
                                .applyFilter('filteredId', null);
                        }
                    }
                },
                listeners: {
                    dirtychange: function(){
                        this.getTrigger('clear')
                            .setHidden(Ext.isEmpty(this.getValue()));
                    }
                }
            },
            {
                fieldLabel: 'Описание',
                bind: '{description}',
                triggers: {
                    clear: {
                        cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                        weight: -1,
                        hidden: true,
                        handler: function() {
                            this.setValue(null);
                            this.lookupController()
                                .applyFilter('filteredDescription', null);
                        }
                    }
                },
                listeners: {
                    dirtychange: function(){
                        this.getTrigger('clear')
                            .setHidden(Ext.isEmpty(this.getValue()));
                    }
                }
            }
        ]
    }]
});

