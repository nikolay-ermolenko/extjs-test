Ext.define('App.login.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.main-login',

    control: {
        '#': {
            afterrender: {
                delay: 100,
                fn: function (panel) {
                    panel.items.first().focus();
                    panel.el.on('keypress', function (e) {
                        if (
                            e.keyCode === 13
                            && this.getViewModel().get('isEnableLogIn')
                        ) {
                            this.logIn();
                        }
                    }, this, {buffer: 300});
                }
            }
        }
    },

    logIn: function () {
        var vm = this.getViewModel();
        if (
            vm.get('formLogin') === 'admin'
            && vm.get('formPasswd') === 'padmin'
        ) {
            Ext.getCmp('main-dashboard')
                .getViewModel()
                .set('authorised', true);
        } else {
            Ext.toast({
                html: 'Ошибка авторизации',
                align: 'tr'
            });
        }
    }
});

