var EmpModel = require("./model/emp.js").EmpModel;

exports.getAllEmp = function(callback) {
	EmpModel.find().sort({
		_id: 1
	}).exec(function(err, data) {
		callback(data);
	})
}

exports.getAllEmpByPage = function(curPage, eachPage, callback) {
	var page = {
		curPage: curPage,
		eachPage: eachPage,
		count: 0,
		maxPage: 0,
		data: []
	}
	EmpModel.count(function(err, data) {
		page.count = data;
		page.maxPage = Math.ceil(page.count / page.eachPage);
		EmpModel.find().sort({
				_id: 1
			})
			.skip((page.curPage - 1) * page.eachPage)
			.limit(page.eachPage)
			.exec(function(err, data) {
				console.log(data);
				page.data = data;
				callback(page);
			})
	})
}



exports.getAllEmpByPageAndName = function(curPage, eachPage, empName, callback) {
	var empNameExp = "/" + empName + "/";
	var page = {
		curPage: curPage,
		eachPage: eachPage,
		count: 0,
		maxPage: 0,
		data: []
	}
	EmpModel.count({
		empName: eval(empNameExp)
	}, function(err, data) {
		page.count = data;
		page.maxPage = Math.ceil(page.count / page.eachPage);
		EmpModel.find({
				empName: eval(empNameExp)
			}).sort({
				_id: 1
			})
			.skip((page.curPage - 1) * page.eachPage)
			.limit(page.eachPage)
			.exec(function(err, data) {
				console.log(data);
				page.data = data;
				callback(page);
			})
	})
}