Ext.define('App.cities.Streets', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.cities-streets',

    requires: [
        'App.cities.StreetsFilter',
        'App.cities.StreetsController'
    ],

    controller: 'cities-streets',

    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1,
        listeners: {
            edit: 'afterCellEdit'
        }
    },

    header: {
        items: [
            {
                xtype: 'button',
                text: 'Добавить улицу',
                handler: 'addStreet'
            }
        ],
        title: {
            text: 'Улицы'
        }
    },

    columns: [
        // {
        //     dataIndex: 'id',
        //     width: 60
        // }, {
        //     dataIndex: 'city_id',
        //     width: 60
        // },
        {
            dataIndex: 'name',
            text: 'Улица',
            minWidth: 110,
            flex: 1,
            editor: {
                completeOnEnter: true,
                field: {
                    xtype: 'textfield'
                }
            }
        },
        {
            xtype: 'templatecolumn',
            tpl: '{company_name}',
            dataIndex: 'company_id',
            text: 'Ответственная компания',
            minWidth: 110,
            flex: 1,
            editor: {
                xtype: 'combobox',
                anyMatch: true,
                displayField: 'name',
                valueField: 'id',
                queryMode: 'local',
                listConfig: {
                    minWidth: 300
                },
                bind: {
                    store: '{companiesStore}'
                }
            }
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'buildings',
            text: 'Кол-во домов',
            align: 'right',
            format: '0',
            minWidth: 150,
            editor: {
                xtype: 'numberfield',
                minValue: 0
            }
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'street_population',
            text: 'Население',
            align: 'right',
            format: '0',
            minWidth: 150,
            renderer: function (value) {
                return +value === 0 ? 0 : '~' + value;
            }
        },
        {
            xtype: 'actioncolumn',
            width: 30,
            items: [{
                xtype: 'button',
                tooltip: 'Удалить запись',
                iconCls: 'x-fa fa-trash',
                handler: 'removeStreet'
            }]
        }
    ],
    viewConfig: {
        emptyText: 'Укажите на фильтре наименование или регион',
        deferEmptyText: true
    },
    dockedItems: [
        {
            xtype: 'panel',
            dock: 'top',
            flex: 1,
            scrollable: 'x',
            items: {
                xtype: 'cities-streets-filter',
                minWidth: 300,
                bodyPadding: 5
            }
        }
    ]
});
