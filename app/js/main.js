requirejs.config({
    baseUrl: "js",
    paths: {
        'mustache':         'lib/mustache/mustache',
        'text':             'lib/text/text'
    },
    shim: {
        "lib/underscore/underscore-min": {
            exports: "_"
        },
        "lib/backbone/backbone-min": {
            deps: ["lib/underscore/underscore-min"],
            exports: "Backbone"
        },
        'lib/backbone/backbone-overrides': {
            deps: ['lib/backbone/backbone-min', 'lib/underscore/underscore-min']
        },
        "lib/d3/d3.v3.min": {
            exports: "d3"
        },
        'lib/jquery/jquery.min': {
            exports: '$'
        },
        "app": {
            deps: [
                "lib/underscore/underscore-min",
                "lib/backbone/backbone-min",
                "lib/backbone/backbone-overrides",
                "lib/d3/d3.v3.min"
            ]
        }
    }
});

require(["app"], function (App) {
    window.mapWidget = new App();
});