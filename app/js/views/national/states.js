define([
    "lib/d3/d3.v3.min",
    "models/tooltip",
    "views/tooltip"
],

function (d3, Tooltip, TooltipView) {

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
            this.data = options.data;
            this.map = options.map;
            this.addGroup();
            this.addElements(events);
        },

        handleMouseover: function (data, event) {
            event.stopImmediatePropagation();
            this.showTooltip(data.properties.ST_ABBR);
        },

        handleMouseout: function (data, event) {
            event.stopImmediatePropagation();
            this.hideTooltip();
        },

        handleClick: function (data, event) {
            event.stopImmediatePropagation();
        },

        handleDblclick: function (data, event) {
            event.stopImmediatePropagation();
        },

        showTooltip: function (id) {
            var self = this;
            _.each(this.map.tooltips, function (model) {
                if (model.abbreviation === id) {
                    self.tooltip = new TooltipView({
                        model: model
                    });
                    self.tooltip.show();
                }
            });
        },

        hideTooltip: function () {
            if (typeof this.tooltip !== "undefined") {
                this.tooltip.hide();
            }
        }

    });

    return StatesView;

});