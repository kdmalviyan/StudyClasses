/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.exports.login = function(username, password) {
	Users.find({
		username : username
	}, function(err, results) {
		if (err) {
			return null;
		} else if (results) {
			return results;
		}
	});
	return null;
};

module.exports.save = function(username, password, address) {
	Users.create({
		username : username,
		password : password,
		address : address
	}, function(err, data) {
		if (err) {
			console.log("Error occured.." + err);
		} else {
			console.log("Document saved");
		}
	});
};