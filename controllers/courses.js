/*
 * GET user list page.
 */
module.exports.get_courses = function(req, res) 
{
  var db = req.db;
  var collection = db.get('course');

  collection.find({}).then((docs) => {
    res.render('list', { "data" : docs });
  })
};
