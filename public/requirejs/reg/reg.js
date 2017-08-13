define(["$"], function($) {
	var load = function() {

		$("#app").load("./reg/reg.html", function() {

		})
	}
	return {
		load: load
	}
})