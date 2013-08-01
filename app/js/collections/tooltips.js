define([
    "models/tooltip"
],

function (Tooltip) {

    var Tooltips = Backbone.Collection.extend({
        model: Tooltip,
        url: "/json/tooltip/states.json"
    });

    return Tooltips;

});