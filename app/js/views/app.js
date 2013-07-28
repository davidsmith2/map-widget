define([
    "lib/text/text!templates/app.html"
],

function (template) {

    var AppView = Backbone.View.extend({

        el: "body",
        template: _.template(template),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

    return AppView;

});