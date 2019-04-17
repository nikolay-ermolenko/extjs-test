Ext.define('App.cities.StreetCardController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.cities-street-card',


    rejectForm: function () {
        this.getView().close();
    },

    saveForm: function () {
        var vm = this.getViewModel().getParent(),
            data = this.getViewModel().getData(),
            newStreet = vm.getStore('streetsStore')
                .insert(0, {
                    type: 'streets',
                    name: data.name,
                    city_id: +data.cityId,
                    buildings: data.buildings,
                    company_id: +data.selectedCompany.get('id'),
                    company_name: data.selectedCompany.get('name')
                }),
            index = vm.getStore('streetsStore')
                .findBy(function (rec) {
                    return rec.getId() === newStreet[0].getId()
                });
        if (index === -1) {
            Ext.toast({
                html: 'Улица добавлена, но сейчас не видна в таблице',
                align: 'tr'
            });
        }
        this.getView().close();
    }
});

