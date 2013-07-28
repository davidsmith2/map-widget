define([
],

function () {
    var States = Backbone.Collection.extend({
        url: "/json/states.json"
    });
    return States;
});