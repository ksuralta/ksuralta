var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var name = 'Kenneth Suralta';
  var profession = 'Software Engineer';
  var linkedin_url = 'https://www.linkedin.com/in/ksuralta';
  var flickr_url = 'https://www.flickr.com/photos/25981773@N05/';
  var github_url = 'https://github.com/ksuralta';
  var twitter_url = 'https://twitter.com/ksuralta';
  var stackoverflow_url = 'http://stackoverflow.com/users/16139/ksuralta';
  res.render('index', {
	      	title: name,
	          name: name,
	          profession: profession,
	          linkedin_url: linkedin_url,
	          flickr_url: flickr_url,
	          github_url: github_url,
	          twitter_url: twitter_url,
	          stackoverflow_url: stackoverflow_url
	      });
});
module.exports = router;
