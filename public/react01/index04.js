import React from "react";
import {
	render
} from "react-dom";

import {
	Router,
	Route,
	hashHistory,
	IndexRoute
} from "react-router";

import LoginApp from "./components/LoginApp.js";
import RegApp from "./components/RegApp.js";
import InfoApp from "./components/info/InfoApp.js";

import StudentApp from "./components/info/student/StudentApp.js";
import TeacherApp from "./components/info/teacher/TeacherApp.js";
import SystemApp from "./components/info/system/SystemApp.js";
import EmpApp from "./components/info/emp/EmpApp.js";
import AddEmpApp from "./components/info/emp/AddEmpApp.js";
import GetEmpApp from "./components/info/emp/GetEmpApp.js";


render((
	<Router history={ hashHistory }>
		<Route path="/" component={ LoginApp }></Route>
		<Route path="/login" component={ LoginApp }></Route>
		<Route path="/reg" component={ RegApp }></Route>
		<Route path="/info" component={ InfoApp }>
			<IndexRoute component={ StudentApp }></IndexRoute>
			<Route path="student" component={ StudentApp }></Route>
			<Route path="teacher" component={ TeacherApp }></Route>
			<Route path="system" component={ SystemApp }></Route>
			<Route path="emp" component={ EmpApp }>
				<IndexRoute component={ AddEmpApp }></IndexRoute>
				<Route path="addEmp" component={ AddEmpApp }></Route>
				<Route path="getEmp" component={ GetEmpApp }></Route>
			</Route>
		</Route>
	</Router>
), document.getElementById("app"));