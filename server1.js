var express=require('express');
var app=express();

app.get("/",function(req,res){
    res.send("Hello World");
})

app.listen(5000,()=>{
    console.log("Hello world server is started")
})