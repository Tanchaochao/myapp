define(function(require, exports, module) {

    exports.load = function() {
        var $ = require("$");
    	$("#app").load("./login/login.html", function() {
    		
    		$("#submitBtn").on("click", function() {
                require("router").router("info");
    		});

    		$("#regBtn").on("click", function() {
    			require("router").router("reg");
    		});
            
    	});
    }
});