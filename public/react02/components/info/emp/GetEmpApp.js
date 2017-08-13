import React from 'react';
import {
	connect
} from "react-redux";
import {
	curPage,
	asynAllEmpByPage
} from "../../../actions/action.js";

class GetEmpApp extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'GetEmpApp';
	}

	setCurPage() {
		var value = this.refs.curPage.value;
		this.props.page.curPage = value;
		this.props.dispatch(asynAllEmpByPage(this.props.page))
	}

	setEachPage() {
		var value = this.refs.eachPage.value;
		this.props.page.eachPage = value;
		this.props.dispatch(asynAllEmpByPage(this.props.page))
	}

	componentWillMount() {
		this.props.dispatch(asynAllEmpByPage(this.props.page))
	}

	firstPage() {
		this.props.page.curPage = 1;
		this.props.dispatch(asynAllEmpByPage(this.props.page))
	}

	prePage() {
		if (this.props.page.curPage > 1) {
			this.props.page.curPage--;
			this.props.dispatch(asynAllEmpByPage(this.props.page))
		}
	}

	nextPage() {
		if (this.props.page.curPage < this.props.page.maxPage) {
			this.props.page.curPage++;
			this.props.dispatch(asynAllEmpByPage(this.props.page))
		}
	}

	lastPage() {
		this.props.page.curPage = this.props.page.maxPage;
		this.props.dispatch(asynAllEmpByPage(this.props.page))
	}

	render() {
		var page = this.props.page;
		var options = [];
		for (let i = 1; i <= page.maxPage; i++) {
			options.push(
				<option key={ i } value={ i }>{ i }</option>
			);
		}
		var trs = page.data.map((item, index) => {
			return (
				<tr key={ index }>
					<td>{ item._id }</td>
					<td>{ item.empName }</td>
					<td>{ item.sal }</td>
					<td>{ item.job }</td>
					<td><input type="button" value="删除" /></td>
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
					<select ref="curPage" onChange={ () => this.setCurPage() } value={ page.curPage }>
						{ options }
					</select>
					每页条数: <input ref="eachPage" defaultValue={ page.eachPage } onBlur={ () => this.setEachPage() } type="text" />
					总页数: <span>{ page.maxPage }</span>
					总条数: <span>{ page.count }</span>
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


function select(state) {
	return {
		page: state.page
	}
}

export default connect(select)(GetEmpApp);