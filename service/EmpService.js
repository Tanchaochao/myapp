var EmpDao = require("../dao/EmpDao.js");
exports.getAllEmp = function(callback) {
	EmpDao.getAllEmp(function(data) {
		console.log(data);
		callback(data);
	});
}

exports.getAllEmpByPage = function(curPage, eachPage, callback) {
	EmpDao.getAllEmpByPage(curPage, eachPage, function(data) {
		callback(data);
	});
}

exports.getAllEmpByPageAndName = function(curPage, eachPage, empName, callback) {
	EmpDao.getAllEmpByPageAndName(curPage, eachPage, empName, function(data) {
		callback(data);
	});
}

