/**
 * http://usejsdoc.org/
 */
var express = require('express');
var userDao = require('../daos/dao.users');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('Home', {
		title : 'Home',
		isActive : true
	});
});

router.get('/support', function(req, res, next) {
	res.render('Support', {
		title : 'Support',
		isActive : true
	});
});

router.get('/about', function(req, res, next) {
	res.render('About', {
		title : 'About',
		isActive : true
	});
});

router.get('/blog', function(req, res, next) {
	res.render('Blog', {
		title : 'Blog',
		isActive : true
	});
});

router.get('/contact', function(req, res, next) {
	res.render('Contact', {
		title : 'Contact',
		isActive : true
	});
});

router.get('/loginPage', function(req, res, next) {
	res.render('Login', {
		title : 'Login',
		isActive : true
	});
});

router.post('/login', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	var result = userDao.login(username, password);
	if(result){
		console.log("User is authenticated: " + result);
	}else{
		console.log("User authentication failed: " + result);
	}
	res.send('respond with a resource');
});

module.exports = router;
