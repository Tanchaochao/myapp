angular.module("RegModule", [])
	.directive("reg", function() {
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: "./reg/reg.html",
			scope: {}
		}
	})