const mongoose= require("mongoose");

const SkillSchema= new mongoose.Schema({
    name:String,
    image:String
});

const SkillModel = mongoose.model("skills",SkillSchema);

module.exports=SkillModel;