define([
    "views/national/states"
],

function (StatesView) {

    var Router = Backbone.Router.extend({

        routes: {
            '!/states': 'viewStates'
        },

        viewStates: function (options) {
            return new StatesView({
                map: options.map,
                data: options.data
            });
        }

    });

    return Router;

});