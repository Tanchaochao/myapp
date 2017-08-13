angular.module("app", ["ui.router", "LoginModule", "RegModule", "InfoModule"])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/login");
		$stateProvider.state("login", {
				url: "/login",
				template: "<login></login>"
			})
			.state("reg", {
				url: "/reg",
				template: "<reg></reg>"
			})
			.state("info", {
				url: "/info",
				views: {
					"": {
						template: "<info></info>"
					},
					"infoContent@info": {
						template: "<info-index></info-index>"
					}
				}
			})
			.state("info.student", {
				url: "/student",
				views: {
					"infoContent@info": {
						template: "<info-student></info-student>"
					}
				}
			})
			.state("info.teacher", {
				url: "/teacher",
				views: {
					"infoContent@info": {
						template: "<info-teacher></info-teacher>"
					}
				}
			})
			.state("info.system", {
				url: "/info/system",
				views: {
					"infoContent@info": {
						template: "<info-system></info-system>"
					}
				}
			})
			.state("info.emp", {
				url: "/emp",
				views: {
					"infoContent@info": {
						template: "<info-emp></info-emp>"
					}
				}
			})
			.state("info.emp.getEmp", {
				url: "/getEmp",
				template: "<get-emp></get-emp>"
			})
			.state("info.emp.addEmp", {
				url: "/addEmp",
				template: "<add-emp></add-emp>"
			})
	})