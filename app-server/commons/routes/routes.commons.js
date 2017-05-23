/**
 * http://usejsdoc.org/
 */
var express = require('express');
var userDao = require('../daos/dao.users');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('home', {
		title : 'Home',
		isActive : true,
		footer : 'layouts/footer',
		header : 'layouts/header',
		menu : 'layouts/menu'
	});
});

router.get('/service', function(req, res, next) {
	res.render('service', {
		title : 'Service',
		isActive : true
	});
});

router.get('/about', function(req, res, next) {
	res.render('about', {
		title : 'About',
		isActive : true
	});
});

router.get('/staff', function(req, res, next) {
	res.render('staff', {
		title : 'Staff',
		isActive : true
	});
});

router.get('/contact', function(req, res, next) {
	res.render('contact', {
		title : 'Contact',
		isActive : true
	});
});

router.get('/details', function(req, res, next) {
	res.render('details', {
		title : 'Details',
		isActive : true
	});
});

router.get('/loginPage', function(req, res, next) {
	res.render('login', {
		title : 'Login',
		isActive : true
	});
});

router.post('/login', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	var result = userDao.login(username, password);
	console.log(username + " " + password);
	if (result) {
		console.log("User is authenticated: " + result);
	} else {
		console.log("User authentication failed: " + result);
	}
	res.send('respond with a resource');
});

module.exports = router;
