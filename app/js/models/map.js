define([
    "lib/d3/d3.v3.min"
],

function (d3) {

    var Map = Backbone.Model.extend({

        defaults: {
            height: "400",
            width: "800"
        },

        getViewBox: function () {
            return "0 0 " + this.defaults.width + " " + this.defaults.height;
        },

        getProjection: function () {
            return d3.geo
                .albersUsa()
                .scale(this.defaults.width)
                .translate([(this.defaults.width / 2), (this.defaults.height / 2)]);
        },

        getPath: function (projection) {
            return d3.geo
                .path()
                .projection(projection);
        }

    });

    return Map;

});