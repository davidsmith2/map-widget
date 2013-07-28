define([
    "lib/d3/d3.v3.min"
],

function (d3) {

    var StatesView = Backbone.View.extend({

        el: "#map",
        id: "states",
        tagName: "g",

        initialize: function (options) {
            var self = this;
            this.map = options.map;
            this.data = options.data;
            this.add();
            this.draw();
            this.drawPaths();
        },

        add: function () {
            this.map.g = d3.select(this.el).append(this.tagName);
        },

        draw: function () {
            this.map.g.attr("id", this.id);
        },

        drawPaths: function () {
            var self = this,
                tagName = "path",
                attrs,
                events;

            attrs = {
                class: "path",
                d: this.map.path,
                id: function (d) {
                    return d.properties.ST_ABBR;
                },
                title: "title",
                stroke: "#000",
                "stroke-width": "1px",
                fill: "#fff"
            };

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

            this.map.g
                .selectAll(tagName)
                .data(this.data)
                .enter()
                .append(tagName)
                .attr(attrs)
                .on(events);

        },

        handleMouseover: function (data, event) {
        },

        handleMouseout: function (data, event) {

        },

        handleClick: function (data, event) {
        },

        handleDblclick: function (data, event) {
            console.log(data);
            console.log(event);
        }

    });

    return StatesView;

});