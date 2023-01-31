const mongoose =require("mongoose");

const MediaSchema=new mongoose.Schema({
    name:String,
    url:String,
    image:String,
    text:String
});

const MediaModel=mongoose.model("media",MediaSchema); 

module.exports=MediaModel;