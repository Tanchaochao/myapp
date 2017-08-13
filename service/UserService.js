
var UserDao = require("../dao/UserDao.js");

exports.login = function(username, password, callback) {
	UserDao.login(username, password, function(data) {
		if(data.length === 1) {
			callback("public/emp.html")
		} else {
			callback("public/fail.html")
		}
	});	
};

exports.reg = function(username, password, callback) {
	UserDao.reg(username, password, function(data) {
		callback(data);
	});
};

exports.isUse = function(username, callback) {
	UserDao.isUse(username, function(data) {
		callback(data);
	});
}

