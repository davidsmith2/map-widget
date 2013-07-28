define([
    "lib/d3/d3.v3.min"
],

function (d3) {

    var MapView = Backbone.View.extend({

        el: "#app",
        id: "map",
        tagName: "svg",

        initialize: function (options) {
            this.map = options.map;
            this.model = options.model;
            this.add();
            this.draw();
        },

        add: function () {
            this.map.svg = d3.select(this.el).append(this.tagName);
        },

        draw: function () {
            var model = this.model,
                attrs = {
                    height: model.defaults.height,
                    id: this.id,
                    viewBox: model.getViewBox(),
                    width: model.defaults.width
                };

            this.map.svg.attr(attrs);
        }

    });

    return MapView;

});