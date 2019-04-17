Ext.define('App.main.Main', {

    extend: 'Ext.tab.Panel',

    alias: 'widget.main-main',

    requires: [
        'App.main.MainController',
        'App.main.MainViewModel'
    ],

    controller: 'main-main',

    viewModel: 'main-main',

    header: {
        items: [
            {
                xtype: 'button',
                text: 'Товары',
                handler: 'addGoodsList'
            },
            {
                xtype: 'tbspacer',
                width: 10
            },
            {
                xtype: 'button',
                text: 'Города',
                handler: 'addCitiesList'
            },
            {
                xtype: 'tbspacer',
                width: 50
            },
            {
                xtype: 'button',
                text: 'Выход',
                handler: 'logOut'
            }
        ],
        title: {
            text: 'Главное окно'
        }
    }
});
