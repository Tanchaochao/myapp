define(function(require, exports) {
	
	var $ = require("$");

	var load = function() {
		$("#app").load("./reg/reg.html", function() {

		});
	};

	exports.load = load;
})