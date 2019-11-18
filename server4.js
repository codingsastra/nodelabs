var express=require('express');
var app=express();
var articles=require('./routes/articles')

var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extender:true}));

app.use("/api/articles",articles)

app.listen(5000,()=>{
    console.log("Server 4 started")
})