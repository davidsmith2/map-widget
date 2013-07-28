define([
    "collections/states",
    "models/map",
    "router",
    "views/app",
    "views/map"
],

function (States, Map, Router, AppView, MapView) {

    var App = function () {
        var self = this;
        this.router = new Router();
        this.models.map = new Map();
        this.map.projection = this.models.map.getProjection();
        this.map.path = this.models.map.getPath(this.map.projection);
        this.views.app = new AppView();
        this.views.map = new MapView({
            map: this.map,
            model: this.models.map
        });
        this.collections.states = new States();
        this.collections.states.fetch({
            success: function (collection, response, options) {
                //console.log(collection);
                //console.log(response);
                //console.log(options);

                self.router.viewStates({
                    map: self.map,
                    data: response.features
                });

            },
            error: function (collection, response, options) {
                //console.log(collection);
                //console.log(response);
                //console.log(options);
            }
        });
    };

    App.prototype = {
        collections: {},
        map: {},
        models: {},
        views: {}
    };

    return App;

});