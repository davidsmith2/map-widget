define([
],

function () {

    var Tooltip = Backbone.Model.extend({
        defaults: {
            abbreviation: "",
            name: "",
            population: ""
        }
    });

    return Tooltip;

});