define(function(require, exports) {

	var $ = require("$");

    $(window).on("popstate", function(event) {
        var state = event.originalEvent.state;
        state = state || location.hash.slice(location.hash.indexOf("/") + 1)
        load(state);
    });

    function load(state) {
        switch (state) {
            case "login":
                return require("login").load();
            case "reg":
                return require("reg").load();
            case "info":
            	return require("info").load();
            case "info/system":
            	return require("info").load(require("system").load);
            case "info/teacher":
            	return require("info").load(require("teacher").load);
            case "info/student":
            	return require("info").load(require("student").load);
            case "info/emp":
            	return require("info").load(require("emp").load);
            default:
                return require("login").load();

        }
    }

    exports.router = function(state) {
        history.pushState(state, "", "#/" + state);
        load(state);
    }
});
