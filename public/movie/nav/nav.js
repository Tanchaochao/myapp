define(function(require, exports) {
	var $ = require("$")
	exports.load = function() {
		$(".nav-index").on("click", function() {
			require("router").router("")
		})
		$(".nav-news").on("click", function() {
			require("router").router("news");
		})
		$(".nav-movie").on("click", function() {
			require("router").router("movie");
		})
	}
})