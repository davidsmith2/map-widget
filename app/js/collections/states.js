define([
    "models/state"
],

function (State) {

    var States = Backbone.Collection.extend({
        model: State,
        url: "/json/geo/states.json"
    });

    return States;

});