var express = require('express');
var EmpService = require("../service/EmpService.js");
var router = express.Router();


router.post("/getAllEmp", function(req, res) {
	EmpService.getAllEmp(function(data) {
		res.send(data);
	});
});

router.post("/getAllEmpByPage", function(req, res) {
	console.log(req.body.curPage, req.body.eachPage);
	EmpService.getAllEmpByPage(req.body.curPage, req.body.eachPage, function(data) {
		res.send(data);
	});
});

router.post("/getAllEmpByPageAndName", function(req, res) {
	EmpService.getAllEmpByPageAndName(req.body.curPage, req.body.eachPage, req.body.empName, function(data) {
		res.send(data);
	});
});



module.exports = router;