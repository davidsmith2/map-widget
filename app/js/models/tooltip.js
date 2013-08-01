define([
],

function () {

    var Tooltip = Backbone.Model.extend({
        defaults: {
            abbreviation: "",
            name: "",
            population: 0
        }
    });

    return Tooltip;

});