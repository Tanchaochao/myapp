import React from 'react';
import {
	hashHistory
} from "react-router";

class RegApp extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'RegApp';
	}

	regClickHandle() {
		hashHistory.push("/login");
	}

	render() {
		return (
			<form>
				<div>账户:<input type="text" /></div>
				<div>密码:<input type="text" /></div>
				<div><input onClick={ () => this.regClickHandle() } type="button" value="注册" /></div>
			</form>
		);
	}
}

export default RegApp;