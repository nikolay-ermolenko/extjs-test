Ext.define('App.cities.StreetCardViewModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.cities-street-card',

    data: {
        name: null,
        cityId: null,
        vName: null,
        selectedCompany: null,
        buildings: null
    },
    formulas: {
        isValid: {
            bind: {
                name: '{name}',
                cityId: '{cityId}'
            },
            get: function (conf) {
                var streetsStore = this.getParent().getStore('streetsAllStore'),
                    index = streetsStore.findBy(
                        function (rec) {
                            return rec.get('name') === conf.name
                                && rec.get('city_id') === conf.cityId;
                        }
                    );
                this.set(
                    'vName',
                    index > -1
                        ? 'Такая улица уже есть в таком городе'
                        : null
                );
            }
        }
    }
});

