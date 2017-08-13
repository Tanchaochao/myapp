require.config({
    paths: {
        "$": "./jquery",
        "login": "../login/login",
        "reg": "../reg/reg",
        "router": "../router/router"
    }
});

require(["router"], function(router) {
	var path = location.hash;
	router(path.slice(path.indexOf("/") + 1));
});
