define([
    "lib/d3/d3.v3.min"
],

function (d3) {

    var StatesView = Backbone.View.extend({

        el: "#map",
        tagName: "g",

        initialize: function (options) {
            var self = this, events;

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
            this.addGroups();
            this.addPaths(events);
            this.addLabels(events);
        },

        addGroups: function () {
            this.map.paths = d3.select(this.el).append(this.tagName).attr("id", "paths");
            this.map.labels = d3.select(this.el).append(this.tagName).attr("id", "labels");
        },

        addPaths: function (events) {
            var self = this,
                tagName = "path",
                attrs;

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

            this.map.paths
                .selectAll(tagName)
                .data(this.data)
                .enter()
                .append(tagName)
                .attr(attrs)
                .on(events);

        },

        addLabels: function (events) {
            var self = this,
                tagName = "text",
                attrs;

            attrs = {
                class: "text",
                "text-anchor": function (d) {
                    return "middle";
                },
                title: "title",
                transform: function (d) {
                    var position = self.map.path.centroid(d);
                    return "translate(" + position + ")";
                }
            };

            this.map.labels
                .selectAll(tagName)
                .data(this.data)
                .enter()
                .append(tagName)
                .text(function (d) {
                    return d.properties.ST_ABBR;
                })
                .attr(attrs)
                .on(events);

        },

        handleMouseover: function (data, event) {
            console.log(data);
            console.log(event);
        },

        handleMouseout: function (data, event) {
            console.log(data);
            console.log(event);
        },

        handleClick: function (data, event) {
            console.log(data);
            console.log(event);
        },

        handleDblclick: function (data, event) {
            console.log(data);
            console.log(event);
        }

    });

    return StatesView;

});