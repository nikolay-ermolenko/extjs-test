Ext.define('App.goods.MainViewModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-goods',

    data: {
        id: null,
        description: null,
        filteredId: null,
        filteredDescription: null,
        goodSelection: null
    },
    stores: {
        localGoodsStore: {
            source: 'staticStore',
            storeId: 'localGoodsStore',
            filters: [
                {
                    property: 'id',
                    operator: '=',
                    disableOnEmpty: true,
                    value: '{filteredId}'
                },
                {
                    property: 'description',
                    operator: 'like',
                    disableOnEmpty: true,
                    value: '{filteredDescription}'
                }
            ]
        }
    },
    links: {
        selectedGood: '{getGoodSelection}'
    },
    formulas: {
        isDirty: {
            bind: {
                bindTo: '{selectedGood}',
                deep: true
            },
            get: function (selection) {
                return selection
                    ? selection.dirty
                    : false;
            }
        },
        getGoodSelection: function (getter) {
            return getter('goodSelection') ?
                Ext.create(
                    'App.models.Goods',
                    getter('goodSelection').getData()
                )
                : null;
        },
        goodsCount: {
            bind: {
                filteredId: '{filteredId}',
                filteredDescription: '{filteredDescription}',
                localGoodsStore: '{localGoodsStore}'
            },
            get: function (conf) {
                return conf.localGoodsStore.getCount();
            }
        }
    }
});
