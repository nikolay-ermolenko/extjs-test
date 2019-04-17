Ext.define('App.cities.CitiesFilter', {

    extend: 'Ext.form.Panel',

    alias: 'widget.cities-filter',

    items: [
        {
            xtype: 'textfield',
            name: 'cityName',
            fieldLabel: 'Город',
            width: '100%',
            triggers: {
                clear: {
                    cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                    weight: -1,
                    hidden: true,
                    handler: function() {
                        this.setValue(null);
                        this.lookupController()
                            .applyFilter('filteredCityName', null);
                    }
                }
            },
            listeners: {
                dirtychange: function(){
                    this.getTrigger('clear')
                        .setHidden(Ext.isEmpty(this.getValue()));
                }
            }
        },
        {
            xtype: 'combobox',
            anyMatch: true,
            width: '100%',
            displayField: 'name',
            valueField: 'id',
            fieldLabel: 'Регион',
            queryMode: 'local',
            listConfig: {
                minWidth: 300
            },
            triggers: {
                clear: {
                    cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                    weight: -1,
                    hidden: true,
                    handler: function() {
                        this.clearValue();
                    }
                }
            },
            listeners: {
                dirtychange: function(){
                    this.getTrigger('clear')
                        .setHidden(Ext.isEmpty(this.getValue()));
                }
            },
            bind: {
                store: '{regionsStore}',
                value: '{filteredRegionId}'
            }
        },
        {
            xtype: 'numberfield',
            allowDecimals: false,
            name: 'population',
            fieldLabel: 'Население',
            minValue: 0,
            width: '100%',
            bind: '{population}',
            triggers: {
                clear: {
                    cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                    weight: -1,
                    hidden: true,
                    handler: function() {
                        this.setValue(null);
                        this.lookupController()
                            .applyFilter('filteredPopulation', null);
                    }
                }
            },
            listeners: {
                dirtychange: function(){
                    this.getTrigger('clear')
                        .setHidden(Ext.isEmpty(this.getValue()));
                }
            }
        }
    ]
});
