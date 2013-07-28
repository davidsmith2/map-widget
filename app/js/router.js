define([
    "views/states/plural"
],

function (StatesView) {

    var Router = Backbone.Router.extend({

        routes: {
            '!/states': 'viewStates'
        },

        viewStates: function (options) {
            var view = new StatesView({
                map: options.map,
                data: options.data
            });
        }

    });

    return Router;

});