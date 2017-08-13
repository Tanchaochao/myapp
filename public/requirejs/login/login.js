define(["$", "reg", "router"], function($, reg, router) {
	var load = function() {
		$("#app").load("./login/login.html", function() {
			$("input[type=button]").on("click", function() {
				require("router")("reg");
			});
		})
	};
	return {
		load: load
	}
});