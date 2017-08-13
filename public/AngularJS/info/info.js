angular.module("Info", [])
	.directive("info", function() {
		return {
			restrict: "AE",
			templateUrl: "./info/info.html",
			replace: true,
			scope: {}
		}
	})
	.directive("infoEmp", function() {
		return {
			restrict: "AE",
			templateUrl: "./info/emp/emp.html",
			replace: true,
			scope: {}
		}
	})
	.directive("addEmp", function() {
		return {
			restrict: "AE",
			templateUrl: "./info/emp/addEmp.html",
			replace: true,
			scope: {}
		}
	})
	.directive("getEmp", function($http) {
		return {
			restrict: "AE",
			templateUrl: "./info/emp/getEmp.html",
			replace: true,
			scope: {},
			link: function(scope) {
				scope.page = {
					curPage: 1,
					eachPage: 5,
					count: 0,
					maxPage: 0,
					data: []
				}

				scope.color = "red"

				getEmpByPage();

				function getEmpByPage() {
					$http.post("/emp/getAllEmpByPage", scope.page)
						.success(function(data) {
							scope.page = data;
							scope.page.options = [];
							for (var i = 1; i <= scope.page.maxPage; i++) {
								scope.page.options.push({
									displayName: i,
									value: i
								})
							}
							console.log(scope.page.options)
						})
				}

				scope.setCurPage = function() {
					getEmpByPage();
				};

				scope.setEachPage = function() {
					getEmpByPage();
				};

				scope.firstPage = function() {
					scope.page.curPage = 1;
					getEmpByPage();
				}

				scope.lastPage = function() {
					scope.page.curPage = scope.page.maxPage;
					getEmpByPage();
				}

				scope.del = function(id) {
					console.log(id)
				}
			}
		}
	})