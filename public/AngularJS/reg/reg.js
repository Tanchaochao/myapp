angular.module("Reg", [])
	.directive("reg", function($state, $http) {
		return {
			restrict: "AE",
			scope: {},
			replace: true,
			templateUrl: "./reg/reg.html",
			link: function(scope) {
				scope.isUse = function() {
					// console.log("isUse")
					$http.post("/users/isUse", scope.user)
						.success(function(data) {
							if (data == "false") {
								scope.info = "你的用户名已经存在!!"
							} else {
								scope.info = "用户名合法,可以注册!!"
							}
						})
				};

				scope.reg = function() {
					$http.post("/users/reg", scope.user).success(function(data) {
						if (data == "true") {
							$state.go("login")
						}
					})
				};
			}
		}
	})