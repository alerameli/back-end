const mongoose = require("mongoose");

const JobSchema=new mongoose.Schema({
    company:String,
    lapse:String,
    description:String,
    image:String,
    charge:String
});

const JobModel=mongoose.model("jobs",JobSchema)

module.exports=JobModel;