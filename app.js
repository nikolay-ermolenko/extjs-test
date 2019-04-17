Ext.onReady(function () {
    Ext.application({

        extend: 'Ext.app.Application',

        requires: [
            'App.overrides.toolbar.Paging',
            'App.dashboard.Main'
        ],

        name: 'App',

        appFolder: 'src/app',

        mainView: 'App.dashboard.Main',

        launch: function () {
            try {
                L.loader.msg('Готово', true);
                L.loader.hide();
            } catch (e) {

            }

            if (Ext.util && Ext.util.Format) {
                Ext.apply(Ext.util.Format, {
                    thousandSeparator: '&#160;'
                });
            }

            Ext.isDefined(Preloader)
                && Ext.isFunction(Preloader.update)
                && Preloader.update('Готово!', true);

            Ext.get(Ext.getDom('preloader')).fadeOut({
                remove: true,
                duration: 600,
                delay: 100
            });
        }
    });
});