define(function(require, exports) {
	var $ = require("$");
	exports.load = function() {
		$(".info").load("./info/system/system.html");
	}
})