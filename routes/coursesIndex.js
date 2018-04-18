var express = require('express');
var router = express.Router();
var ctrMain = require('../controllers/courses.js')

/*
 * GET user list page.
 */
router.get('/', ctrMain.get_courses);

// get add course page
router.get('/addCourse', function (req, res, next) {
    res.render('addForm')
})

router.post('/addCourse', ctrMain.add_course);

module.exports = router;
