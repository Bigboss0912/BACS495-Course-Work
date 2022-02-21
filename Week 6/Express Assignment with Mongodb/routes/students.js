var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

const students = [
    {"studentID": "12345", "firstName":"John", "lastName":"Doe"},
    {"studentID": "67890","firstName":"Anna", "lastName":"Smith"},
    {"studentID": "13821","firstName":"Peter", "lastName":"Jones"}
  ]


  router.post('/:student_ID', function (req, res) {
    var id = req.params.studentID;
    
    var student_ID = {"studentID":id, "firstName":"", "lastName":""};
  
    students.push(student_ID);
    console.log(JSON.stringify(student_ID) + " added to students array");
  
    res.send(
      'Student Inserted'
    );
  });

router.post('/', function (req, res) {

  const student = {
    'studentId': req.body.studentID,
    'firstName': req.body.firstName,
    'lastName': req.body.lastName
  }

  var db = req.app.locals.db;
  db.collection('students').insertOne(student);

  res.send(
    'Student Inserted'
  );
});

/* GET students listing. */
router.get('/', function(req, res) {

  var db = req.app.locals.db;
  db.collection('students').find({}).toArray(function(err, result) {
    if (err) {
      res.status(400).send("Error fetching records!!!");
    } else {
      res.json(result);
    }
  });

});

router.get('/getByID', function(req, res) {
  const student = {
    "studentId": req.body.studentID,
  }

  var db = req.app.locals.db;
  db.collection('students').find(student).toArray(function(err, result) {
    if (err) {
      res.status(400).send("Error fetching records!!!");
    } else {
      res.json(result);
    }
  });

});

router.put('/:studentID/:newFirstName', function(req, res) {
  var id = req.params.studentID;
  var name = req.params.newFirstName;

  for (let student of students ) {
    if(student.studentID == id) {
      console.log((JSON.stringify(student)) + " changing firstName to " + name);
      student['firstName'] = name;
    }}

    res.send({
      students
    });

});

router.delete('/:studentID', function(req, res) {
  var id = req.params.studentID;

  for (let student of students ) {
    if(student.studentID == id) {
      console.log((JSON.stringify(student)) + " removing this student");
      const index = students.indexOf(student);
      students.splice(index, 1);
    }
  }
  
  res.send({
    students
  });

});

module.exports = router;