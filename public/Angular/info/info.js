angular.module("InfoModule", [])
	.directive("info", function() {
		return {
			restrict: "AE",
			replace: true,
			scope: {},
			templateUrl: "./info/info.html"
		}
	})
	.directive("infoIndex", function() {
		return {
			restrict: "AE",
			replace: true,
			scope: {},
			template: "<div>欢迎你!</div>"
		}
	})
	.directive("infoStudent", function() {
		return {
			restrict: "AE",
			replace: true,
			scope: {},
			template: "<div>student</div>"
		}
	})
	.directive("infoTeacher", function() {
		return {
			restrict: "AE",
			replace: true,
			scope: {},
			template: "<div>teacher</div>"
		}
	})
	.directive("infoSystem", function() {
		return {
			restrict: "AE",
			replace: true,
			scope: {},
			template: "<div>system</div>"
		}
	})
	.directive("infoEmp", function() {
		return {
			restrict: "AE",
			replace: true,
			scope: {},
			templateUrl: "./info/emp/emp.html"
		}
	})
	.directive("addEmp", function() {
		return {
			restrict: "AE",
			replace: true,
			scope: {},
			template: "<div>addEmp</div>"
		}
	})
	.directive("getEmp", function() {
		return {
			restrict: "AE",
			replace: true,
			scope: {},
			template: "<div>getEmp</div>"
		}
	})