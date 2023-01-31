const mongoose =require("mongoose");

const ProjectSchema=new mongoose.Schema({
    name:String,
    description:String,
    techs:Object
});

const ProjectModel=mongoose.model("projects",ProjectSchema); 

module.exports=ProjectModel;