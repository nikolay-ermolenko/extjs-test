Ext.define('App.models.Goods', {

    extend: 'Ext.data.Model',

    idProperty: 'id',

    fields: [
        {
            name: 'id',
            type: 'integer'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'price',
            type: 'number'
        },
        {
            name: 'quantity',
            type: 'integer'
        }
    ],

    proxy: {
        type: 'ajax',
        url: 'api/goods/static.php',
        reader: {
            type: 'json',
            rootProperty: 'data.goods'
        }
    }
});