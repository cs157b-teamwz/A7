/*
 * GET user list page.
 */
module.exports.get_courses = function(req, res)
{

    var db = req.db;
    var collection = db.get('course');

    collection.find({}).then(function(docs)  {
        res.render('list', { "data" : docs });
    })
};

module.exports.add_course = function(req, res){
    var db = req.db;
    var collection = db.get('course');

    var prof = req.body.professor.split(',');
    var newCourse = {"courseTitle": req.body.courseTitle,
        "sectionNum": req.body.sectionNum,
        "lastName": prof[0],
        "firstName": prof[1],
        "officeHour": {"location": req.body.office}};
    collection.insert(newCourse, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    })

}