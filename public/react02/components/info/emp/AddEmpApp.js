import React from 'react';

class AddEmpApp extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'AddEmpApp';
	}
	render() {
		return (
			<div>
				<div>员工姓名: <input type="text" /></div>
				<div>员工薪水: <input type="text" /></div>
				<div>员工岗位: <input type="text" /></div>
				<div><input type="button" value="提交" /></div>
			</div>
		);
	}
}

export default AddEmpApp;