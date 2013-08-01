define([
    "lib/text/text!templates/tooltip.html",
    "lib/underscore/underscore-min"
],

function (template, _) {

    var TooltipView = Backbone.View.extend({

        el: "#tooltip",
        template: _.template(template),

        events: {},

        initialize: function (options) {
            this.model = options.model;
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model));
            return this;
        },

        show: function () {
            this.$el.show();
        },

        hide: function () {
            this.$el.hide();
        }

    });

    return TooltipView;

});