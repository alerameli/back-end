const mongoose = require("mongoose");

const SchoolSchema=new mongoose.Schema({
    name:String,
    lapse:String,
    description:String,
    image:String
});

const SchoolModel=mongoose.model("schools",SchoolSchema)

module.exports=SchoolModel;