Ext.define('App.dashboard.MainViewModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-dashboard',

    data: {
        version: Ext.getVersion(),
        devicePixelRatio: window.devicePixelRatio,
        authorised: true
    },
    formulas: {
        splitterSize: {
            bind: {
                devicePixelRatio: '{devicePixelRatio}'
            },
            get: function(conf) {
                return 10 * +conf.devicePixelRatio;
            }
        }
    }
});
