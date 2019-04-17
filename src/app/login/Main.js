Ext.define('App.login.Main', {

    extend: 'Ext.form.Panel',

    alias: 'widget.main-login',

    requires: [
        'App.login.MainController',
        'App.login.MainViewModel'
    ],

    controller: 'main-login',

    viewModel: 'main-login',

    bind: {
        title: 'Авторизация ExtJS {version}'
    },

    width: 300,
    border: true,
    layout: 'form',
    bodyPadding: 5,

    defaults: {
        xtype: 'textfield',
        blankText: 'Обязательное поле',
        allowBlank: false
    },
    items: [
        {
            fieldLabel: 'Логин',
            bind: '{formLogin}'
        },
        {
            inputType: 'password',
            fieldLabel: 'Пароль',
            bind: '{formPasswd}'
        }
    ],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
            {
                xtype: 'tbfill' // '->'
            },
            {
                text: 'Войти',
                bind: {
                    disabled: '{!isEnableLogIn}'
                },
                handler: 'logIn'
            }
        ]
    }]
});
