import React from 'react';
import {
	Link
} from "react-router";
import "./info.css";

class InfoApp extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'InfoApp';
	}
	render() {
		return (
			<div className="info">
				<ul className="info-nav">
					<li><Link to="/info/student">学生管理</Link></li>
					<li><Link to="/info/teacher">教师管理</Link></li>
					<li><Link to="/info/system">系统管理</Link></li>
					<li><Link to="/info/emp">员工管理</Link></li>
				</ul>
				{ this.props.children }
			</div>
		);
	}
}

export default InfoApp;