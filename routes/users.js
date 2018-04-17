var express = require('express');
var router = express.Router();
var ctrMain = require('../controllers/courses.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
 * GET user list page.
 */
router.get('/courses', ctrMain.get_courses);


module.exports = router;
