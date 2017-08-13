angular.module("LoginModule", [])
	.directive("login", function($state) {
		return {
			restrict: "AE",
			replace: true,
			templateUrl: "./login/login.html",
			scope: {},
			link: function(scope) {
				scope.login = function() {
					console.log("login");
				};

				scope.reg = function() {
					$state.go("reg")
				}
			}
		}
	})