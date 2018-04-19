var express = require('express');
var router = express.Router();
var ctrMain = require('../controllers/courses.js')

/*
 * GET user list page.
 */
router.get('/', ctrMain.get_courses);

// get add course page
router.get('/addCourse', function (req, res, next) {
    res.render('addForm', {'message': ""});
})

//add new course action
router.post('/addCourse', ctrMain.add_course);

//get search page
router.get('/search', function (req, res, next) {
    res.render('searchCourse');
});

//search db for the course
router.post('/search', ctrMain.searchCourse);


module.exports = router;
