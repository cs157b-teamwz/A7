/*
 * GET courses list page.
 */
module.exports.get_courses = function(req, res)
{

    const db = req.db;
    const collection = db.get('course');

    collection.find({}).then(function(docs)  {
        res.render('list', { "data" : docs });
    })
};

module.exports.add_course = function(req, res){
    const db = req.db;
    const collection = db.get('course');

    const prof = req.body.professor.split(',');
    const newCourse = {"courseTitle": req.body.courseTitle,
        "sectionNum": req.body.sectionNum,
        "professor": {"lastName": prof[0]}, "firstName": prof[1], "officeHour": {"location": req.body.office}};
    collection.insert(newCourse).then(function (docs){
        console.log(docs);
        if(docs){
            res.render('addForm', {'message': "Course Added Successfully"});
        }
    })

};

module.exports.post_deleteCourse = function (req, res) {
    const db = req.db;
    const collection = db.get('course');
    const courseTitle = req.body.courseTitle;
    console.log(courseTitle);
    console.log(req.body);
    collection.remove({"courseTitle": courseTitle}).then(function (docs) {
        console.log(docs);
        if(docs) {
            res.render('deleteForm', {'message': "Course Deleted Successfully"})
        }
    })
};

module.exports.get_deleteCourse = function(req, res)
{
    res.render('deleteCourse', {'message': " Delete?"})
};

module.exports.searchCourse = function (req, res) {
    const db = req.db;
    const collection = db.get('course');
    console.log(req.body);
    collection.findOne({"courseTitle": req.body.courseTitle})
        .then(function (docs) {
            console.log(docs);
            if(docs){
                res.render('searchResult', {'data': docs});
            }

        })
};

module.exports.get_updateCourse = function(req, res)
{
    res.render('updateForm', {'message': "Update?"})
};

module.exports.post_updateCourse = function (req, res) {
    const db = req.db;
    const collection = db.get('course');
    const courseTitle = req.body.courseTitle;
    const sectionNum = req.body.sectionNum;
    const prof = req.body.professor;
    
    collection.update({"courseTitle": courseTitle, "professor.lastName": prof}, {"sectionNum":sectionNum}).then(function (docs) {
        console.log(docs);
        if(docs) {
            res.render('updateForm', { 'message' : "The Section Number Updated Successfully."});
        }
    })
};
