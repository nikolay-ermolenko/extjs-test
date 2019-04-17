Ext.define('App.cities.MainViewModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-cities',

    requires: [
        'App.models.Cities'
    ],

    data: {
        description: null,
        filteredRegionId: null,
        filteredCityName: null,
        filteredPopulation: null,
        filteredCompanyId: null,
        filteredStreetName: null,
        filteredBuildings: null,
        filteredMinStreetPopulation: null,
        filteredMaxStreetPopulation: null,
        selectedCity: null,
    },

    formulas: {
        isFilterNotEmpty: {
            bind: {
                filteredRegionId: '{filteredRegionId}',
                filteredCityName: '{filteredCityName}',
                filteredPopulation: '{filteredPopulation}'
            },
            get: function (conf) {
                return !Ext.isEmpty(conf.filteredRegionId)
                    || !Ext.isEmpty(conf.filteredCityName)
                    || !Ext.isEmpty(conf.filteredPopulation);
            }
        },
        selectedCityId: {
            bind: {
                selectedCity: '{selectedCity}'
            },
            get: function (conf) {
                return conf.selectedCity && conf.selectedCity.get('id');
            }
        }
    },

    stores: {
        staticCitiesStore: {
            autoLoad: true,
            storeId: 'staticCitiesStore',
            model: 'App.models.Cities',
            pageSize: 0
        },
        companiesStore: {
            source: 'staticCitiesStore',
            storeId: 'companiesStore',
            sorters: {
                property: 'name',
                direction: 'ASC'
            },
            filters: {
                property: 'type',
                value: 'companies'
            }
        },
        regionsStore: {
            source: 'staticCitiesStore',
            storeId: 'regionsStore',
            sorters: {
                property: 'name',
                direction: 'ASC'
            },
            filters: {
                property: 'type',
                value: 'region'
            }
        },
        citiesAllStore: {
            source: 'staticCitiesStore',
            storeId: 'citiesAllStore',
            sorters: {
                property: 'name',
                direction: 'ASC'
            },
            filters: [
                {
                    property: 'type',
                    value: 'cities'
                }
            ]
        },
        citiesStore: {
            source: 'staticCitiesStore',
            storeId: 'citiesStore',
            sorters: {
                property: 'name',
                direction: 'ASC'
            },
            filters: [
                {
                    property: 'type',
                    value: 'cities'
                },
                {
                    property: 'region_id',
                    operator: '=',
                    disableOnEmpty: true, //'{isFilterNotEmpty}',
                    value: '{filteredRegionId}'
                },
                {
                    property: 'name',
                    operator: 'like',
                    disableOnEmpty: true, //'{isFilterNotEmpty}',
                    value: '{filteredCityName}'
                },
                {
                    property: 'population',
                    operator: '>=',
                    disableOnEmpty: true, //'{isFilterNotEmpty}',
                    value: '{filteredPopulation}'
                }
            ]
        },
        streetsAllStore: {
            source: 'staticCitiesStore',
            storeId: 'streetsAllStore',
            sorters: {
                property: 'name',
                direction: 'ASC'
            },
            filters: [
                {
                    property: 'type',
                    value: 'streets'
                }
            ]
        },
        streetsStore: {
            source: 'staticCitiesStore',
            storeId: 'streetsStore',
            sorters: {
                property: 'name',
                direction: 'ASC'
            },
            filters: [
                {
                    property: 'type',
                    value: 'streets'
                },
                {
                    property: 'city_id',
                    operator: '=',
                    disableOnEmpty: true,
                    value: '{selectedCityId}'
                },
                {
                    property: 'company_id',
                    operator: '=',
                    disableOnEmpty: true,
                    value: '{filteredCompanyId}'
                },
                {
                    property: 'name',
                    operator: 'like',
                    disableOnEmpty: true,
                    value: '{filteredStreetName}'
                },
                {
                    property: 'buildings',
                    operator: '=',
                    disableOnEmpty: true,
                    value: '{filteredBuildings}'
                },
                {
                    property: 'street_population',
                    operator: '>=',
                    disableOnEmpty: true,
                    value: '{filteredMinStreetPopulation}'
                },
                {
                    // По сути это костыль. Нужно добавление операторов в Ext.util.Filter
                    property: 'street_population_mirror',
                    operator: '<=',
                    disableOnEmpty: true,
                    value: '{filteredMaxStreetPopulation}'
                }
            ]
        }
    }
});
