var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
 /* res.send('respond with a resource OK');*/
  res.render('index', { title: 'Express in C9' });
});

module.exports = router;
