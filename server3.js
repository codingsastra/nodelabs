var express=require('express');
var app=express();

var bodyParser=require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var books=require('./routes/books')


app.use("/api/books",books);


app.listen(5000,()=>{
    console.log("Server is started")
})