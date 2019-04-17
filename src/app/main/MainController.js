Ext.define('App.main.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.main-main',

    requires: [
        'App.goods.Main',
        'App.cities.Main'
    ],

    logOut: function () {
        Ext.getCmp('main-dashboard')
            .getViewModel()
            .set('authorised', false);
    },

    addGoodsList: function () {
        var vm = this.getViewModel();
        this.getView()
            .setActiveTab(
                this.getView()
                    .add({
                        xtype: 'main-goods',
                        title: 'Товары',
                        closable: true
                    })
            );
        if(!vm.get('goodsLoading')) {
            vm.set('goodsLoading', true);
            vm.getStore('staticStore')
                .load();
        }

    },

    addCitiesList: function () {
        if (!this.getView().down('main-cities')) {
            this.getView()
                .add({xtype: 'main-cities', itemId: 'main-cities'})

        }
        this.getView()
            .setActiveTab('main-cities');
    }

});

