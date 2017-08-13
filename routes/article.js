var express = require('express');
var ArticleService = require("../service/ArticleService.js");
var router = express.Router();

/**
 * [description]
 * @description:获取文章列表
 * @Author:      TZH
 * @DateTime     2016-06-16T22:05:09+0800
 * @param        {[type]}                 req   [description]
 * @param        {[type]}                 res   [description]
 * @param        {[type]}                 next) {	ArticleService.getArticleList(function(data) {		console.log(data);		res.send(data);	})} [description]
 * @return       {[type]}                       [description]
 */
router.get('/getArticleList', function(req, res, next) {
	ArticleService.getArticleList(function(data) {
		console.log(data);
		res.send(data);
	})
});

/**
 * [description]
 * @description: 通过文章id, 获取文章
 * @Author:      TZH
 * @DateTime     2016-06-16T22:05:05+0800
 * @param        {[type]}                 req   [description]
 * @param        {[type]}                 res   [description]
 * @param        {[type]}                 next) {	ArticleService.getArticleList(function(data) {		res.send(data);	})} [description]
 * @return       {[type]}                       [description]
 */
router.get('/getArticle', function(req, res, next) {
	ArticleService.getArticle(function(data) {
		res.send(data);
	})
});

/**
 * [description]
 * @description: 获取作者信息
 * @Author:      TZH
 * @DateTime     2016-06-17T10:53:53+0800
 * @param        {[type]}                 req   [description]
 * @param        {[type]}                 res   [description]
 * @param        {[type]}                 next) {	ArticleService.getAuthor(function(data) {		res.send(data);	})} [description]
 * @return       {[type]}                       [description]
 */
router.get('/getAuthor', function(req, res, next) {
	ArticleService.getAuthor(function(data) {
		res.send(data);
	})
});



module.exports = router;