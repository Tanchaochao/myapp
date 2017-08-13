exports.getArticleList = function(callback) {
	var arr = [{
		id: 1,
		title: "文章1"
	}, {
		id: 2,
		title: "文章2"
	}, {
		id: 3,
		title: "文章3"
	}]
	callback(arr)
}

exports.getArticle = function(callback) {
	callback({
		timestamp: "2015-08-26",
		content: "content",
		authorId: 5
	})
}


exports.getAuthor = function(callback) {
	callback({
		"email": "aszx87410@gmail.com",
		"name": "huli",
		"id": 5
	})
};