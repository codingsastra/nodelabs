var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/nodelabs");

var studentSchema=mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    active: Boolean,
    dob: Date
})

exports.Student=mongoose.model('Student',studentSchema,'students');

