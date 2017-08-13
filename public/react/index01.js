import React from 'react';

//react的渲染方法
import {
	render
} from "react-dom";

class GrandpaComponent extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'GrandpaComponent';
	}
	render() {
		return (
			<div>
				<h1>这是grandpa组件</h1>
				<FatherComponent />
			</div>
		);
	}
}


class FatherComponent extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'FatherComponent';
	}
	render() {
		return (
			<div>
				<h1>这是father组件</h1>
				<ChildComponent />
			</div>
		);
	}
}


class ChildComponent extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'ChildComponent';
	}
	render() {
		return <div>ChildComponent</div>;
	}
}

render(<GrandpaComponent />, document.getElementById("app"));