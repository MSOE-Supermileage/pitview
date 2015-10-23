
/*
 * GET home page.
 */

var express = require('express');
var router = express.Router();

router.get('/gas', function(req, res) {
	res.render('car/gas', { title: 'Express' });
});

router.get('/electric', function(req, res) {
	res.render('car/gas', { title: 'Express' });
});

module.exports = router;