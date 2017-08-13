import $ from "jquery";

getArticleList(function(data) {
	//data 文章的列表
	var id = data[0].id;
	//获取文章的详情
	getArticle(id, function(data) {
		var id = data.authorId;
		//通过作者ID, 获取作者详情
		getAuthor(id, function(data) {
			console.log(data.email)
		})
	});
});


function getArticleList(callback) {
	$.ajax({
		type: "GET",
		url: "/article/getArticleList",
		success: function(msg) {
			callback(msg)
		}
	});
}

function getArticle(id, callback) {
	$.ajax({
		type: "GET",
		url: "/article/getArticle",
		success: function(msg) {
			callback(msg)
		}
	});
}

function getAuthor(id, callback) {
	$.ajax({
		type: "GET",
		url: "/article/getAuthor",
		success: function(msg) {
			callback(msg)
		}
	});
}