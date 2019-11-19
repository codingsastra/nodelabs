var express=require('express');
var router=express.Router();
var db=require('../db');

router.route("/")
    .get((req,res)=>{
        db.Student.find({},function(err,students){
            if(err) res.send("Error");
            res.send(students);
        })
    })
    .post((req,res)=>{
        var newStudent=new db.Student(req.body);
        newStudent.save(function(err,student){
            if(err) res.send("Error" + JSON.stringify(err));
            res.send(student);
        })
    })
    

module.exports=router;