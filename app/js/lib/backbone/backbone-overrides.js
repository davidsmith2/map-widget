define([], function () {

    Backbone.Collection.prototype.parse = function (data) {
        if (_.isObject(data.features)) {
            return data.features;
        } else {
            return data;
        }
    };

});