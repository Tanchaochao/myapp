seajs.config({
	base: "./",
    alias: {
    	"$": "modules/jquery",
        "home": "home/index",
        "router": "router/router",
        "nav": "nav/nav",
        "news": "news/news",
        "movie": "list/list"
    }
});

seajs.use(["router", "nav"], function(router, nav) {
    nav.load();
    router.router(location.hash.slice(location.hash.indexOf("/") + 1));
});

