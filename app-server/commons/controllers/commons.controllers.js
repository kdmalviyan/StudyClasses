/**
 * http://usejsdoc.org/
 */
var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://studyclasses.herokuapp.com";
}