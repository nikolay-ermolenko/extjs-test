Ext.define('App.cities.Main', {

    extend: 'Ext.container.Container',

    alias: 'widget.main-cities',

    requires: [
        'App.cities.MainViewModel',
        'App.cities.Cities',
        'App.cities.Streets'
    ],

    viewModel: 'main-cities',

    title: 'Города',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'cities-cities',
            flex: 1,
            bind: {
                store: '{citiesStore}',
                selection: '{selectedCity}'
            }
        },
        {
            xtype: 'splitter',
            border: 1,
            bind: {
                size: '{splitterSize}'
            },
            style: {
                borderColor: 'lightgrey',
                borderStyle: 'solid'
            }
        },
        {
            xtype: 'cities-streets',
            flex: 2,
            bind: {
                store: '{streetsStore}'
            }
        }
    ]

});
