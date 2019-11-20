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

router.route("/:id")
    .get((req,res)=>{

        var id=req.params.id;
        db.Student.findById(id,function(err,s){
            if(err) res.send("Error" + JSON.stringify(err));
            res.send(s);
        })

    })
    .delete((req,res)=>{
        var id=req.params.id;
        db.Student.findByIdAndDelete(id,function(err,student){
            if(err) res.send("Error" + JSON.stringify(err));
            res.send(student);
        })
    })
    .put((req,res)=>{
        var id=req.params.id;
        db.Student.findByIdAndUpdate(id,req.body,{new:true},function(err,student){
            if(err) res.send("Error" + JSON.stringify(err));
            res.send(student);
        })
    })

router.route("/search/:keyword")
    .get((req,res)=>{
        var keyword=req.params.keyword;

        db.Student.find({firstName: { $regex: '.*' + keyword + '.*' }},function(err,students){
            if(err) res.send("Error");
            res.send(students);
        })
    })
    

module.exports=router;