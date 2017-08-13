import React from 'react';

class GetEmpApp extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'GetEmpApp';
		this.state = {
			page: {
				curPage: 1,
				eachPage: 5,
				maxPage: 10,
				count: 0,
				data: []
			}
		}
	}
	componentDidMount() {
		this.getAllEmpByPage();
	}

	getAllEmpByPage() {
		fetch("/emp/getAllEmpByPage", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: `curPage=${ this.state.page.curPage }&eachPage=${ this.state.page.eachPage }`
		}).then((response) => response.json()).then((data) => {
			this.setState({
				page: data
			});
		});
	}

	del(_id) {
		console.log(_id);
	}

	setCurPage() {
		var curPage = this.refs.curPage.value;
		this.state.page.curPage = curPage;
		this.getAllEmpByPage();
	}

	setEachPage() {
		var curPage = this.refs.curPage.value;
		this.state.page.curPage = curPage;
		this.getAllEmpByPage();
	}

	firstPage() {
		this.state.page.curPage = 1;
		this.getAllEmpByPage();
	}

	lastPage() {
		this.state.page.curPage = this.state.page.maxPage;
		this.getAllEmpByPage();
	}

	prePage() {
		if (this.state.page.curPage > 1) {
			this.state.page.curPage--;
			this.getAllEmpByPage();
		}
	}

	nextPage() {

		if (this.state.page.curPage < this.state.page.maxPage) {
			this.state.page.curPage++;
			this.getAllEmpByPage();
		}
	}

	render() {
		var arr = [];
		for (let i = 1; i <= this.state.page.maxPage; i++) {
			arr.push(
				<option key={ i } value={ i }>{ i }</option>
			)
		}
		var trs = this.state.page.data.map((item, index) => {
			return (
				<tr key={ index }>
					<td>{item._id}</td>
					<td>{item.empName}</td>
					<td>{item.sal}</td>
					<td>{item.job}</td>
					<td><input type="button" value="删除" onClick={ () => this.del(item._id) } /></td>
				</tr>
			);
		});
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
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{ trs }
					</tbody>
				</table>
				<div>
					当前页: 
					<select ref="curPage" onChange={ () => this.setCurPage() } value={ this.state.page.curPage}>
						{ arr }
					</select>
					{" "}
					每页条数: <input ref="eachPage" onBlur={ () => this.setEachPage() } type="text" defaultValue={ this.state.page.eachPage } />
					{" "}
					总页数: <span>{ this.state.page.maxPage }</span>
					{" "}
					总条数: <span>{ this.state.page.count }</span>
				</div>
				<div>
					<input onClick={ () => this.firstPage() } type="button" value="首页" />
					<input onClick={ () => this.prePage() } type="button" value="上一页" />
					<input onClick={ () => this.nextPage() } type="button" value="下一页" />
					<input onClick={ () => this.lastPage() } type="button" value="尾页" />
				</div>
			</div>
		);
	}
}

export default GetEmpApp;