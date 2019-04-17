Ext.define('App.goods.Card', {

    extend: 'Ext.window.Window',

    alias: 'widget.main-goods-card',

    requires: [
        'App.goods.CardController'
    ],

    viewModel: true,

    controller: 'main-goods-card',

    layout: 'fit',

    bind: {
        title: 'Карточка товара {selectedGood.name}'
    },

    items: {
        xtype: 'form',
        layout: 'form',
        items: [
            {
                xtype: 'displayfield',
                fieldLabel: 'ID',
                bind: '{selectedGood.id}'
            },
            {
                xtype: 'displayfield',
                fieldLabel: 'Название',
                bind: '{selectedGood.name}'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Описание',
                allowBlank: false,
                bind: '{selectedGood.description}'
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Цена',
                allowDecimal: true,
                allowBlank: false,
                decimalPrecision: 2,
                minValue: 0,
                bind: '{selectedGood.price}'
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Кол-во',
                allowBlank: false,
                minValue: 0,
                bind: '{selectedGood.quantity}'
            }
        ],
        buttons: [
            {
                text: 'Сохранить',
                formBind: true,
                disabled: true,
                bind: {
                    disabled: '{!isDirty}'
                },
                handler: 'saveForm'
            },
            {
                text: 'Отмена',
                handler: 'rejectForm'
            }
        ]
    }
});
