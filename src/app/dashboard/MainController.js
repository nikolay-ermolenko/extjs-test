Ext.define('App.dashboard.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.main-dashboard',

    control: {
        'numberfield': {
            focusenter: function (field) {
                // if (!!~navigator.userAgent.toLowerCase().indexOf('mobile')) {
                //     field.inputEl.dom.setAttribute('type', 'number');
                // }
            },
            focusleave: function () {
                // if (!!~navigator.userAgent.toLowerCase().indexOf('mobile')) {
                //     field.inputEl.dom.setAttribute('type', 'text');
                // }
            }
        }
    }
});
