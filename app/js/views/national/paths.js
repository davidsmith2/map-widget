define([
    "lib/d3/d3.v3.min",
    "views/national/states"
],

function (d3, StatesView) {

    var StatesPathsView = StatesView.extend({

        id: "paths",
        tabAreaLimit: 10000,

        addGroup: function () {
            this.map[this.id] = d3.select(this.el).append(this.tagName).attr("id", this.id);
        },

        addElements: function (events) {
            var self = this,
                tagName = "path",
                attrs;

            attrs = {
                class: function (d) {
                    var population = getPopulation();
                    if (d.properties.CENSUSAREA < self.tabAreaLimit) {
                        self.addToTabs(d);
                    }
                    return population;
                },
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

        addToTabs: function (geoData, population) {}

    });

    function getPopulation () {
        return 1;
    }

    return StatesPathsView;

});