var express=require('express');
var app=express();

var bodyParser=require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//your data
var books=[
    {
        id:1,
        title:"JS Fundamentals",
        author:"John"
    },
    {
        id:2,
        title:"React Beginner",
        author:"Ram"
    },
    {
        id:3,
        title:"Node in action",
        author:"John"
    }
]

//
app.get("/api/books",(req,res)=>{
    res.send(books);
})

//id=4&title=React&author=John

/*
    {
        id:4,
        title:React,
        author:John
    }

*/

app.post("/api/books",(req,res)=>{
    var newBook=req.body;
    console.log(newBook);
    books.push(newBook);
    res.send(books);
})

app.listen(5000,()=>{
    console.log("Server is started")
})