define(function(require, exports) {

	var $ = require("$");

    $(window).on("popstate", function(event) {
        var state = event.originalEvent.state;
        state = state || location.hash.slice(location.hash.indexOf("/") + 1)
        load(state);
    });

    function load(state) {
        switch (state) {
            case "home":
                return require("home").load();
            case "news":
                return require("news").load();
            case "movie":
                return require("movie").load()
            default:
                return require("home").load();
        }
    }

    exports.router = function(state) {
        history.pushState(state, "", "#/" + state);
        load(state);
    }
});
