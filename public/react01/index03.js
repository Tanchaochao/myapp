import React from 'react';
import {
	render,
	unmountComponentAtNode,
	findDOMNode
} from "react-dom";

class TopComponent extends React.Component {
	constructor(props) {
		super(props); //getDefaultProps 
		this.displayName = 'TopComponent';
		//getInitialState 
		this.state = {
			count: this.props.count
		}
	}

	componentWillMount() {
		console.log("will mount");
	}

	componentDidMount() {
		console.log(findDOMNode(this));
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate")
			// if (nextState.count < 5) return true;
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("componentWillUpdate");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate")
	}

	componentWillUnmount() {
		window.clearInterval(this.timer);
	}



	unmount() {
		unmountComponentAtNode(document.getElementById("app"));
	}

	start() {
		this.timer = window.setInterval(() => {
			this.setState({
				count: this.state.count + 1
			})
		}, 1000);
	}

	doUpdate() {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		return (
			<div>
				<h3>计数: { this.state.count }</h3>
				<input type="button" value="start" onClick={ () => this.start() } />
				<input type="button" value="unmount" onClick={ () => this.unmount() } />
				<input type="button" value="doUpdate" onClick={ () => this.doUpdate() } />
				<SubMessage count={ this.state.count } />
			</div>
		);
	}
}


class SubMessage extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'SubMessage';
	}

	componentWillReceiveProps(nextProps) {

	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate")
		if (nextProps.count > 5) return false;
		return true;
	}



	render() {
		return <div>父组件count: { this.props.count }</div>;
	}
}


var data = {
	count: 1
}

render(<TopComponent { ...data } />, document.getElementById("app"));