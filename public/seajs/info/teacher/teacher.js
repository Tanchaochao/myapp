define(function(require, exports) {
	var $ = require("$");
	exports.load = function() {
		$(".info").load("./info/teacher/teacher.html");
	}
})