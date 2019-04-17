Ext.define('App.cities.CitiesController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.cities-cities',

    requires: [],

    control: {
        '#': {
            afterrender: {
                delay: 100,
                fn: function (panel) {
                    var filter = (panel.getDockedItems('panel[dock="top"]') || [])[0];
                    filter = filter ? filter.down('cities-filter') : null;
                    if (filter) {
                        filter.el.on('keypress', function (e) {
                            if (e.keyCode === 13) {
                                var form = filter.getForm(),
                                    values = form.getValues();
                                this.applyFilter('filteredCityName', values['cityName']);
                                this.applyFilter(
                                    'filteredPopulation',
                                    values['population'] === ''
                                        ? null
                                        : +values['population']
                                );
                            }
                        }, this, {buffer: 100});
                    }
                }
            }
        }
    },

    applyFilter: function (alias, value) {
        this.getViewModel()
            .set(alias, value);
    }
});

