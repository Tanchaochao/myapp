import React from 'react';
import {
	hashHistory
} from "react-router";


class LoginApp extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'LoginApp';
	}

	regClickHandle() {
		hashHistory.push("/reg");
	}

	loginClickHandle() {
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		fetch("/users/login?username=" + username + "&password=" + password, {
			method: "GET",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			if (Boolean(data)) {
				hashHistory.push("/info");
			}
		});
	}

	render() {
		return (
			<form>
				<div>账户:<input ref="username" type="text" /></div>
				<div>密码:<input ref="password" type="text" /></div>
				<div><input onClick={ () => this.loginClickHandle() } type="button" value="登录" /><input onClick={ () => this.regClickHandle() } type="button" value="注册" /></div>
			</form>
		);
	}
}

export default LoginApp;