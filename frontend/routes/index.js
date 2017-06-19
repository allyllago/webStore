var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', function(err, html){
  		if (err){
  			console.log(err)

  		}
  		else {
  			res.send(html)
  		}
  	});
});

module.exports = router;
