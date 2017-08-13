angular.module("App", ["ui.router", "Login", "Reg", "Info"])
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
				template: "<info></info>"
			})
			.state("info.student", {
				url: "/student",
				template: "<div>student</div>"
			})
			.state("info.teacher", {
				url: "/teacher",
				template: "<div>teacher</div>"
			})
			.state("info.system", {
				url: "/system",
				template: "<div>system</div>"
			})
			.state("info.emp", {
				url: "/emp",
				template: "<info-emp></info-emp>"
			})
			.state("info.emp.addEmp", {
				url: "/addEmp",
				template: "<add-emp></add-emp>"
			})
			.state("info.emp.getEmp", {
				url: "/getEmp",
				template: "<get-emp></get-emp>"
			})
	})