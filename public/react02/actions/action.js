export const GET_ALL_EMP_BY_PAGE = "GET_ALL_EMP_BY_PAGE";

export function allEmpByPage(page) {
	return {
		type: GET_ALL_EMP_BY_PAGE,
		page
	}
}

export function asynAllEmpByPage(page) {
	return function(dispatch) {
		fetch("/emp/getAllEmpByPage", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: `curPage=${ page.curPage }&eachPage=${ page.eachPage }`
		}).then((response) => response.json()).then((data) => {
			dispatch(allEmpByPage(data));
		});
	}
}