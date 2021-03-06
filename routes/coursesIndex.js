const express = require('express');
const router = express.Router();
const ctrMain = require('../controllers/courses.js');

/*
 * GET course list page.
 */
router.get('/', ctrMain.get_courses);

// get add course page
router.get('/addCourse', function (req, res, next) {
    res.render('addForm', {'message': ""});
});

//add new course action
router.post('/addCourse', ctrMain.add_course);

//get search page
router.get('/search', function (req, res, next) {
    res.render('searchCourse');
});

//search db for the course
router.post('/search', ctrMain.searchCourse);

//delete course from db
router.post('/deleteCourse', ctrMain.post_deleteCourse);

//GET delete user page
router.get('/deleteCourse', ctrMain.get_deleteCourse);

// get update page
router.get('/updateCourse', ctrMain.get_updateCourse);

// update course in the database
router.post('/updateCourse', ctrMain.post_updateCourse);

module.exports = router;
