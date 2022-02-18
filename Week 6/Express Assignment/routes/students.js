var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

const students = [
    {"studentID": "12345", "firstName":"John", "lastName":"Doe"},
    {"studentID": "67890","firstName":"Anna", "lastName":"Smith"},
    {"studentID": "13821","firstName":"Peter", "lastName":"Jones"}
  ]


router.post('/add/:studentID', function (req, res) {
  var id = req.params.studentID;

  students.push(id);
});

/* GET users listing. */
router.get('/list', function(req, res) {
  res.send({
    students
  });
});

router.get('/list/:studentID', function(req, res) {
  var id = req.params.studentID;
  

  for (let student of students ) {
    if(student.studentID == id) {
      res.json(student);
    }}

});

module.exports = router;