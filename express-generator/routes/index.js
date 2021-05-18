var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const value = ["salman","siyaf","rsheed"]
  const per={name1:"rasheed",admin:true}
  res.render('index', {per});
});

module.exports = router;
