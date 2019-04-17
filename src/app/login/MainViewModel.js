Ext.define('App.login.MainViewModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-login',

    data: {
        formLogin: null,
        formPasswd: null
    },
    formulas: {
        isEnableLogIn: {
            bind: {
                formLogin: '{formLogin}',
                formPasswd: '{formPasswd}'
            },
            get: function (conf) {
                if (
                    !conf.formLogin
                    || !conf.formPasswd
                    || (Ext.isString(conf.formLogin) && !conf.formLogin.trim())
                    || (Ext.isString(conf.formPasswd) && !conf.formPasswd.trim())
                ) {
                    return false;
                }
                return true;
            }
        }
    }
});
