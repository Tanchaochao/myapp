import React from 'react';

class GetEmpApp extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'GetEmpApp';
	}
	render() {
		return (
			<div>
				<input />
				<table>
					<thead>
						<tr>
							<th>员工编号</th>
							<th>员工姓名</th>
							<th>员工薪水</th>
							<th>员工岗位</th>
						</tr>
					</thead>
				</table>
				<div>
					当前页: <select></select>
					每页条数: <input type="text" />
					总页数: <span></span>
					总条数: <span></span>
				</div>
				<div>
					<input type="button" value="首页" />
					<input type="button" value="上一页" />
					<input type="button" value="下一页" />
					<input type="button" value="尾页" />
				</div>
			</div>
		);
	}
}

export default GetEmpApp;