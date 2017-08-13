seajs.config({
	base: "./",
    alias: {
    	"login": "login/login",
    	"$": "modules/jquery",
    	"reg": "reg/reg",
        "router": "router/router",
        "info": "info/info",
        "teacher": "info/teacher/teacher",
        "student": "info/student/student",
        "system": "info/system/system",
        "emp": "info/emp/emp",
    }
});

seajs.use("router", function(router) {
    router.router(location.hash.slice(location.hash.indexOf("/") + 1));
});