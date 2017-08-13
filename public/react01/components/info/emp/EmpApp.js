import React from 'react';
import {
	Link
} from "react-router";

import "./emp.css";

class EmpApp extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'EmpApp';
	}

	render() {
		return (
			<div className="emp">
				<ul className="emp-left">
					<li><Link to="/info/emp/addEmp">新增员工</Link></li>
					<li><Link to="/info/emp/getEmp">查询员工</Link></li>
				</ul>
				<div className="emp-right">{ this.props.children }</div>
			</div>
		);
	}
}

export default EmpApp;