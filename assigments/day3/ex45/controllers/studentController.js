const studentData = require("../data/student.json")

const getById = function(req,res){
    const studentId=parseInt(req.params.studentPosition);
    const theStudent = studentData[studentId];
    console.log("GET Student Data: "+theStudent);
    res.status(200).json(theStudent);
}

const getAll = function(req,res){
    console.log("GET all Student Data");
    res.status(200).json(studentData);
} 

module.exports ={getById,getAll};