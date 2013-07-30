define([
    "lib/d3/d3.v3.min",
    "views/national/states"
],

function (d3, StatesView) {

    var StatesLabelsView = StatesView.extend({

        id: "labels",

        addGroup: function () {
            this.map[this.id] = d3.select(this.el).append(this.tagName).attr("id", this.id);
        },

        addElements: function (events) {
            var self = this,
                tagName = "text",
                attrs;

            attrs = {
                class: "text",
                "text-anchor": function (d) {
                    return labelHandler.align(d);
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
        }

    });

    var labelHandler = {
        labels: {
            start: ["FL", "KS", "KY", "NY", "MI", "TN"],
            end: ["LA"]
        },
        align: function (data) {
            if (_.contains(this.labels.start, data.properties.ST_ABBR)) {
                return "start";
            }
            if (_.contains(this.labels.end, data.properties.ST_ABBR)) {
                return "end";
            }
            return "middle";
        }

    };

    return StatesLabelsView;

});