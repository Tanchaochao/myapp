

var UserModel = require("./model/user.js").UserModel;

exports.login = function(username, password, callback) {
	UserModel.find({
		username: username,
		password: password
	}, function(err, data) {
		callback(data)
	})
};

exports.reg = function(username, password, callback) {
	new UserModel({
		username: username,
		password: password
	}).save(function(err, data) {
		if(data) {
			callback("true");
		} else {
			callback("false");
		}
	})
};

exports.isUse = function(username, callback) {
	UserModel.find({
		username: username
	}, function(err, data) {
		if(data.length == 0) {
			callback("true");
		} else {
			callback("false");
		}
	})
}