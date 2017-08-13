angular.module("Login", [])
	.directive("login", function($state, $http) {
		return {
			restrict: "AE",
			scope: {},
			replace: true,
			templateUrl: "./login/login.html",
			link: function(scope) {
				scope.user = {
					username: "zhangsan",
					password: "111111"
				}
				scope.login = function() {
					$http.get("/users/login?username=" + scope.user.username + "&password=" + scope.user.password)
						.success(function(data) {
							if (data == "true") {
								$state.go("info");
							}
						})
				};

				scope.reg = function() {
					$state.go("reg");
				}
			}
		}
	})