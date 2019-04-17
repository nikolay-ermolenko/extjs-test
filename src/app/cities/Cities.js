Ext.define('App.cities.Cities', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.cities-cities',

    requires: [
        'App.cities.CitiesFilter',
        'App.cities.CitiesController'
    ],

    controller: 'cities-cities',

    columns: [
        // {
        //     dataIndex: 'id',
        //     width: 60
        // },
        {
            dataIndex: 'name',
            text: 'Город',
            minWidth: 110,
            flex: 1
        },
        {
            dataIndex: 'region_name',
            text: 'Регион',
            minWidth: 110,
            flex: 1
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'population',
            align: 'right',
            format: '0',
            minWidth: 130,
            text: 'Население'
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
                xtype: 'cities-filter',
                minWidth: 260,
                bodyPadding: 5
            }
        }
    ]
});
