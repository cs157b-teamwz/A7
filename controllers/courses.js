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
        "professor": {"lastName": prof[0]}, "firstName": prof[1], "officeHour": {"location": req.body.office}};
    collection.insert(newCourse).then(function (docs){
        console.log(docs)
        if(docs){
            res.render('addForm', {'message': "Course Added Successfully"});
        }
    })

}

module.exports.searchCourse = function (req, res) {
    var db = req.db;
    var collection = db.get('course');
    console.log(req.body);
    collection.findOne({"courseTitle": req.body.courseTitle})
        .then(function (docs) {
            console.log(docs);
            if(docs){
                res.render('searchResult', {'data': docs});
            }

        })
}