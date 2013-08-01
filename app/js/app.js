define([
    "collections/states",
    "collections/tooltips",
    "models/map",
    "router",
    "views/app",
    "views/map"
],

function (States, Tooltips, Map, Router, AppView, MapView) {

    var App = function () {
        var self = this;
        this.router = new Router();
        this.models.map = new Map();
        this.views.app = new AppView();
        this.views.map = new MapView({
            map: this.map,
            model: this.models.map
        });
        this.collections.tooltips = new Tooltips();
        this.collections.tooltips.fetch({
            success: function (collection, response, options) {
                //console.log(collection);
                //console.log(response);
                //console.log(options);
                self.map.tooltips = response.states;
            },
            error: function (collection, response, options) {
                //console.log(collection);
                //console.log(response);
                //console.log(options);
            }
        });
        this.collections.states = new States();
        this.collections.states.fetch({
            success: function (collection, response, options) {
                //console.log(collection);
                //console.log(response);
                //console.log(options);
                self.router.viewStates({
                    data: response.features,
                    map: self.map
                });
            },
            error: function (collection, response, options) {
                //console.log(collection);
                //console.log(response);
                //console.log(options);
            }
        });
        this.map.projection = this.models.map.getProjection();
        this.map.path = this.models.map.getPath(this.map.projection);
    };

    App.prototype = {
        collections: {},
        map: {},
        models: {},
        views: {}
    };

    return App;

});