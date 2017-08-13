define(function(require, exports) {
	var $ = require("$");
	exports.load = function(callback) {
		var cb = callback || function() {};
		$("#app").load("./info/info.html", function() {
			$(".nav .student").on("click", function() {
				require("router").router("info/student");
			});
			$(".nav .teacher").on("click", function() {
				require("router").router("info/teacher");
			});
			$(".nav .system").on("click", function() {
				require("router").router("info/system");
			});
			$(".nav .emp").on("click", function() {
				require("router").router("info/emp");
			});
			cb();
		});
	}
})