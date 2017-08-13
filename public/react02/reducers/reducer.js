import {
	GET_ALL_EMP_BY_PAGE,
	SET_CUR_PAGE
} from "../actions/action.js";


import {
	combineReducers,
} from 'redux';

var pageState = {
	curPage: 1,
	eachPage: 10,
	maxPage: 10,
	count: 0,
	data: []
}

var page = function(state = pageState, action) {
	switch (action.type) {
		case GET_ALL_EMP_BY_PAGE:
			return action.page;
		default:
			return state;
	}
}

var reducer = combineReducers({
	page
});

export default reducer;