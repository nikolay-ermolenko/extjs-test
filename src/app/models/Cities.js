Ext.define('App.models.Cities', {

    extend: 'Ext.data.Model',

    idProperty: 'uuid',

    identifier: 'uuid',

    fields: [
        {
            name: 'id',
            type: 'integer',
            convert: function(val) {
                return val || parseInt(Math.random()*10000000000000);
            }
        },
        {
            name: 'uuid',
            type: 'integer'
        },
        {
            name: 'type',
            type: 'string'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'region_id',
            type: 'integer'
        },
        {
            name: 'population',
            type: 'integer'
        },
        {
            name: 'buildings',
            type: 'integer'
        },
        {
            name: 'street_population',
            type: 'integer',
            calculate: function(data) {
                return +data.buildings * 750;

            }
            // convert: function (val, rec) {
            //     return 750 * +(rec.get('buildings'));
            // }
        },
        {
            name: 'street_population_mirror',
            type: 'integer',
            calculate: function(data) {
                return +data.buildings * 750;

            }
            // convert: function (val, rec) {
            //     return 750 * +(rec.get('buildings'));
            // }
        }
    ],

    proxy: {
        type: 'ajax',
        url: 'api/cities/static.php',
        reader: {
            type: 'json',
            transform: function (data) {
                var res = [], i = 0;
                if (data.state !== true && !data.data) {
                    return res;
                }
                Ext.Object.each(data.data || {}, function (key, val) {
                    Ext.Array.each(val || [], function (rec) {
                        res.push(
                            Ext.apply(rec, {
                                type: key,
                                uuid: ++i
                            })
                        );
                    });
                });

                return res;
            }
        }
    }
});