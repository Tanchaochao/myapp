var ArticleDao = require("../dao/ArticleDao.js");

exports.getArticleList = function(callback) {
	ArticleDao.getArticleList(function(data) {
		callback(data);
	})
};

exports.getArticle = function(callback) {
	ArticleDao.getArticle(function(data) {
		callback(data);
	})
};

exports.getAuthor = function(callback) {
	ArticleDao.getAuthor(function(data) {
		callback(data);
	})
};