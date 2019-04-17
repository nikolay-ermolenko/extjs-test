Ext.define('App.dashboard.Main', {

    extend: 'Ext.container.Container',

    alias: 'widget.main-dashboard',

    id: 'main-dashboard',

    requires: [
        'Ext.plugin.LazyItems',
        'App.dashboard.MainViewModel',
        'App.dashboard.MainController',
        'App.login.Main',
        'App.main.Main'
    ],

    layout: {
        type: 'card',
        deferredRender: true
    },

    bind: {
        checkAuthorised: '{authorised}'
    },

    viewModel: 'main-dashboard',

    controller: 'main-dashboard',

    items: [
        {
            xtype: 'container',
            itemId: 'loginPage',
            layout: 'center'
        },
        {
            xtype: 'container',
            itemId: 'mainPage',
            layout: 'fit',
            plugins: {
                ptype: 'lazyitems',
                items: {
                    xtype: 'main-main'
                }
            }
        }
    ],

    setCheckAuthorised: function (value) {
        var loginPage = this.down('#loginPage');
        if (value === true) {
            loginPage.removeAll(true);
            this.setActiveItem('mainPage');
        } else {
            loginPage.add({xtype: 'main-login'});
            this.setActiveItem(loginPage);
        }
    }

});
