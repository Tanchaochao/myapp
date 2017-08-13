import React from 'react';
import {
	hashHistory
} from "react-router";

class RegApp extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'RegApp';
		this.state = {
			isUse: "",
			disabled: ""
		}
	}

	regClickHandle() {
		fetch("/users/reg", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: `username=${ this.refs.username.value }&password=${ this.refs.password.value }`
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			if (Boolean(data)) {
				hashHistory.push("/login");
			}
		});
	}

	isUse() {
		fetch("/users/isUse", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: `username=${ this.refs.username.value }`
		}).then((response) => response.json()).then((data) => {
			if (Boolean(data)) {
				this.setState({
					isUse: "用户名合法",
					disabled: ""
				})
			} else {
				this.setState({
					isUse: "用户名无效",
					disabled: "disabled"
				})
			}
		});
	}

	render() {
		return (
			<form>
				<div>账户:<input onBlur={ () => this.isUse() } ref="username" type="text" /><span>{ this.state.isUse }</span></div>
				<div>密码:<input ref="password" type="text" /></div>
				<div>
					<input disabled={ this.state.disabled } onClick={ () => this.regClickHandle() } type="button" value="注册" />
				</div>
			</form>
		);
	}
}

export default RegApp;