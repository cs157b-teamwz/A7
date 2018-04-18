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
