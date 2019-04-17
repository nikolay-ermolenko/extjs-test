Ext.define('App.overrides.toolbar.Paging', {

    override: 'Ext.toolbar.Paging',

    getPageData: function () {

        // var bind = this.getBind(),
        //     store = null;
        // if ( this.store && this.store.isStore ) {
        //     store = this.store;
        // }
        //
        // if ( bind && bind.store ) {
        //     var obj = bind.store.getDataObject();
        //     if ( obj.isStore ) {
        //         store = obj;
        //     }
        // }
        //
        // console.log(22, store);
        //
        // return {
        //     total: store.getCount(),
        //     currentPage: store.currentPage,
        //     pageCount: Math.ceil(store.getCount() / store.pageSize)
        // };



        // debugger;



        // var store = this.store,
        //     totalCount = store.getTotalCount();
        // return {
        //     total: totalCount,
        //     currentPage: store.currentPage,
        //     pageCount: Math.ceil(totalCount / store.pageSize),
        //     fromRecord: ((store.currentPage - 1) * store.pageSize) + 1,
        //     toRecord: Math.min(store.currentPage * store.pageSize, totalCount)
        // };



    }
});
