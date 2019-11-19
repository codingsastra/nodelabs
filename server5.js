var express=require('express');
var app=express();
var students=require('./routes/students')

var bodyParser=require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send('API Home Page')
})

app.use("/api/students",students)

app.listen(5000,()=>{
    console.log("Server 5 started")
})