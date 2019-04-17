Ext.define('App.goods.CardController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.main-goods-card',


    rejectForm: function () {
        var selectedGood = this.getViewModel().get('selectedGood');
        if (selectedGood && Ext.isFunction(selectedGood.reject)) {
            selectedGood.reject();
        }
        this.getView().close();
    },

    saveForm: function () {
        var modifiedMessage = [];

        Ext.Object.each(
            this.getViewModel().get('modified'),
            function (key, value) {
                modifiedMessage.push(
                    Ext.String.format(
                        'До: <span style="color:green">{0}</span><br>После: <span style="color:red">{1}</span>',
                        value,
                        this.getViewModel().get('selectedGood.' + key)
                    )
                );
            },
            this
        );

        Ext.MessageBox.confirm(
            'Имеются изменённые данные',
            modifiedMessage.join('<br />'),
            function (btn) {
                if (btn !== 'yes') {
                    return;
                }
                this.getView()
                    .fireEvent(
                        'onFormSave',
                        this.getViewModel().get('selectedGood').getData(),
                        this.getViewModel().get('parentId')
                    );
            },
            this
        );
    }
});

