const mongoose = require("mongoose");

const ContactSchema= new mongoose.Schema({
    name:String,
    description:String,
    github:String,
    linkedind:String,
    phone:String,
    email:String
});

const ContactModel= mongoose.model("contacts",ContactSchema);

module.exports=ContactModel;