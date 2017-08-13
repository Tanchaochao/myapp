import React from 'react';
import {
	render
} from "react-dom";

import "./theme.css";

class MessageBox extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'MessageBox';
		this.state = {
			title: "hello world",
			isVisible: true
		}
	}
	clickHandle() {
		this.setState({
			isVisible: !this.state.isVisible
		});
	}

	setTitle(text) {
		var value = text || this.refs.visible.value;
		this.setState({
			title: value
		})
	}

	render() {
		var styleObj = {
			display: this.state.isVisible ? "block" : "none"
		}
		return (
			<div className="messageBox">
        		<h3 style={ styleObj }>MessageBox</h3>
        		<div>{ this.state.title }</div>
        		<input onClick={ () => this.clickHandle() } type="button" value="点击" /><br />
        		<input value={ this.state.title } ref="visible" type="text" onChange={ () => this.setTitle() } />
        		<SubMessageBox onSetTitle={ (text) => this.setTitle(text) } setVisible={ () => this.clickHandle() } msg={ this.state.title } />
        	</div>
		);
	}
}

class SubMessageBox extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'SubMessageBox';
	}

	setTitle() {
		let value = this.refs.title.value;
		this.props.onSetTitle(value);
	}

	render() {
		return (
			<div className="subMessageBox">
				<h3>SubMessageBox</h3>
				<input onClick={ this.props.setVisible } type="button" value="点击" /><br />
				<input value={ this.props.msg } ref="title" type="text" onChange={ () => this.setTitle() } />
				<div>{ this.props.msg }</div>
			</div>
		);
	}
}

render(<MessageBox />, document.getElementById("app"))