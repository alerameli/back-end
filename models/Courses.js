const mongoose= require("mongoose");

const CourseSchema= new mongoose.Schema({
    name:String,
    techs:String,
    image:String,
    url:String
});

const CourseModel = mongoose.model("courses",CourseSchema);

module.exports=CourseModel;