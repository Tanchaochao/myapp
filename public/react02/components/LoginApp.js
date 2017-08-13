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
		hashHistory.push("/info");
	}

	render() {
		return (
			<form>
				<div>账户:<input type="text" /></div>
				<div>密码:<input type="text" /></div>
				<div><input onClick={ () => this.loginClickHandle() } type="button" value="登录" /><input onClick={ () => this.regClickHandle() } type="button" value="注册" /></div>
			</form>
		);
	}
}

export default LoginApp;