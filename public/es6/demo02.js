import $ from "jquery";

function getArticleList() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			type: "GET",
			url: "/article/getArticleList",
			success: function(msg) {
				resolve(msg)
			}
		});
	})
}

function getArticle(id) {
	return new Promise(function(resolve, reject) {
		$.ajax("/article/getArticle", {
			id: id
		}).done(function(result) {
			resolve(result);
		})
	})
}

getArticleList()
	.then(function(data) {
		return getArticle(data[0].id)
	})
	.then(function(data) {
		return getAuthor(data.authorId)
	})
	.then(function(data) {
		console.log(data);
	})

function getAuthor(authorId) {
	return new Promise(function(resolve, reject) {
		$.ajax("/article/getAuthor", {
			author: authorId
		}).done(function(result) {
			resolve(result)
		})
	})
}

// getArticleList(function(articles) {
// 	getArticle(articles[0].id, function(article) {
// 		getAuthor(article.authorId, function(author) {
// 			console.log(author)
// 		})
// 	})
// })

// function getAuthor(id, callback) {
// 	$.ajax("/article/getAuthor", {
// 		author: id
// 	}).done(function(result) {
// 		callback(result);
// 	})
// }

// function getArticle(id, callback) {
// 	$.ajax("/article/getArticle", {
// 		id: id
// 	}).done(function(result) {
// 		callback(result);
// 	})
// }

// function getArticleList(callback) {
// 	$.ajax({
// 		type: "GET",
// 		url: "/article/getArticleList",
// 		success: function(msg) {
// 			callback(msg)
// 		}
// 	});
// }