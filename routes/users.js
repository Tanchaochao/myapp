var express = require('express');
var UserService = require("../service/UserService.js");
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('123');
});


router.get("/login", function(req, res) {
	var username = req.query.username;
	var password = req.query.password;
	//调用服务层接口
	UserService.login(username, password, function(url) {
		if (url === "public/emp.html") {
			req.session.username = username;
			res.send("true");
		} else {
			res.send("false");
		}
	});
});

router.post("/isLogin", function(req, res) {
	console.log("in")
	console.log(req.session.username)
	if (req.session.username) {
		res.send("true");
	} else {
		res.send("false");
	}
});

router.post("/checkout", function(req, res) {
	req.session.destroy();
	res.send("true");
});

router.post("/reg", function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	UserService.reg(username, password, function(data) {
		res.send(data);
	})
});

router.post("/isUse", function(req, res) {
	UserService.isUse(req.body.username, function(data) {
		res.send(data);
	});
})

module.exports = router;