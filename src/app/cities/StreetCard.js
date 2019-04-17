Ext.define('App.cities.StreetCard', {

    extend: 'Ext.window.Window',

    alias: 'widget.cities-street-card',

    requires: [
        'App.cities.StreetCardViewModel',
        'App.cities.StreetCardController'
    ],

    viewModel: 'cities-street-card',

    controller: 'cities-street-card',

    layout: 'fit',

    title: 'Добавление новой улицы',

    items: {
        xtype: 'form',
        layout: 'form',

        items: [
            {
                xtype: 'textfield',
                allowBlank: false,
                fieldLabel: 'Название улицы',
                minLength: 4,
                bind: '{name}'
            },
            {
                xtype: 'combobox',
                allowBlank: false,
                anyMatch: true,
                fieldLabel: 'Ответственная компания',
                displayField: 'name',
                valueField: 'id',
                queryMode: 'local',
                listConfig: {
                    minWidth: 300
                },
                bind: {
                    selection: '{selectedCompany}',
                    store: '{companiesStore}'
                }
            },
            {
                xtype: 'numberfield',
                allowBlank: false,
                fieldLabel: 'Дома',
                allowDecimal: false,
                minValue: 0,
                bind: '{buildings}'
            },
            {
                xtype: 'combobox',
                queryDelay: 300,
                allowBlank: false,
                anyMatch: true,
                fieldLabel: 'Город',
                displayField: 'name',
                valueField: 'id',
                queryMode: 'local',
                listConfig: {
                    minWidth: 300
                },
                bind: {
                    value: '{cityId}',
                    store: '{citiesAllStore}'
                }
            },
            {
                xtype: 'textfield',
                readOnly: true,
                bind: {
                    hidden: '{!vName}',
                    value: '{vName}',
                    validation: '{vName}'
                }
            }
        ],
        buttons: [
            {
                text: 'Сохранить',
                formBind: true,
                disabled: true,
                handler: 'saveForm'
            },
            {
                text: 'Отмена',
                handler: 'rejectForm'
            }
        ]
    }
});
