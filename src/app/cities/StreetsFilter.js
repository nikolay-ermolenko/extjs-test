Ext.define('App.cities.StreetsFilter', {

    extend: 'Ext.form.Panel',

    alias: 'widget.cities-streets-filter',

    items: [
        {
            xtype: 'textfield',
            name: 'streetName',
            fieldLabel: 'Улица',
            width: '100%',
            triggers: {
                clear: {
                    cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                    weight: -1,
                    hidden: true,
                    handler: function() {
                        this.setValue(null);
                        this.lookupController()
                            .applyFilter('filteredStreetName', null);
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
            fieldLabel: 'Компания',
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
                store: '{companiesStore}',
                value: '{filteredCompanyId}'
            }
        },
        {
            xtype: 'numberfield',
            allowDecimals: false,
            name: 'buildings',
            minValue: 0,
            fieldLabel: 'Кол-во домов',
            width: '100%',
            triggers: {
                clear: {
                    cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                    weight: -1,
                    hidden: true,
                    handler: function() {
                        this.setValue(null);
                        this.lookupController()
                            .applyFilter('filteredBuildings', null);
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
            xtype: 'fieldcontainer',
            fieldLabel: 'Население',
            layout: 'hbox',
            viewModel: {
                data: {
                    minStreetPopulation: null,
                    maxStreetPopulation: null
                }
            },
            items: [
                {
                    xtype: 'numberfield',
                    allowDecimals: false,
                    minValue: 0,
                    name: 'min_street_population',
                    bind: {
                        value: '{minStreetPopulation}',
                        maxValue: '{maxStreetPopulation}'
                    },
                    flex: 1,
                    triggers: {
                        clear: {
                            cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                            weight: -1,
                            hidden: true,
                            handler: function() {
                                this.setValue(null);
                                this.lookupController()
                                    .applyFilter('filteredMinStreetPopulation', null);
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
                    xtype: 'splitter',
                    bind: {
                        size: '{splitterSize}'
                    }
                },
                {
                    xtype: 'numberfield',
                    allowDecimals: false,
                    name: 'max_street_population',
                    bind: {
                        value: '{maxStreetPopulation}',
                        minValue: '{minStreetPopulation}'
                    },
                    flex: 1,
                    triggers: {
                        clear: {
                            cls: Ext.baseCSSPrefix + 'form-clear-trigger',
                            weight: -1,
                            hidden: true,
                            handler: function() {
                                this.setValue(null);
                                this.lookupController()
                                    .applyFilter('filteredMaxStreetPopulation', null);
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
        }
    ]
});
