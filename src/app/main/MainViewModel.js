Ext.define('App.main.MainViewModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-main',

    requires: [
        'App.models.Goods'
    ],

    data: {
        goodsLoading: false
    },
    stores: {
        staticStore: {
            autoLoad: false,
            pageSize: 0,
            storeId: 'staticStore',
            model: 'App.models.Goods'
        }
    }
});
