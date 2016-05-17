var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Learning Cells AWS Shadow', welcome: "Simple Example for AWS IoT" });
});

module.exports = router;
