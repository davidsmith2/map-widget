define([
    "views/national/paths",
    "views/national/labels"
],

function (StatesPathsView, StatesLabelsView) {

    var Router = Backbone.Router.extend({

        routes: {
            '!/states': 'viewStates'
        },

        viewStates: function (options) {
            initPaths(options);
            initLabels(options);
            function initPaths (options) {
                return new StatesPathsView(options);

            }
            function initLabels (options) {
                return new StatesLabelsView(options);
            }
        }

    });

    return Router;

});