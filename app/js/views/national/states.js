define([
    "lib/d3/d3.v3.min"
],

function (d3) {

    var StatesView = Backbone.View.extend({

        el: "#map",
        tagName: "g",

        initialize: function (options) {
            var self = this;
            events = {
                mouseover: function (d) {
                    self.handleMouseover(d, d3.event);
                },
                mouseout: function (d) {
                    self.handleMouseout(d, d3.event);
                },
                click: function (d) {
                    self.handleClick(d, d3.event);
                },
                dblclick: function (d) {
                    self.handleDblclick(d, d3.event);
                }
            };
            this.map = options.map;
            this.data = options.data;
            this.addGroup();
            this.addElements(events);
        },

        handleMouseover: function (data, event) {
            event.stopImmediatePropagation();
        },

        handleMouseout: function (data, event) {
            event.stopImmediatePropagation();
        },

        handleClick: function (data, event) {
            event.stopImmediatePropagation();
        },

        handleDblclick: function (data, event) {
            event.stopImmediatePropagation();
        }

    });

    return StatesView;

});