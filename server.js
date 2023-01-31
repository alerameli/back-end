require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const JobModel = require("./models/Jobs");
const SchoolModel = require("./models/School");
const cors = require("cors");
const ProjectModel = require("./models/Projects");
const CourseModel = require("./models/Courses");
const ContactModel = require("./models/Contact");
const SkillModel = require("./models/Skills");
const MediaModel = require("./models/Media");
const path = require("path");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3002;
const url = process.env.DATABASE_URL;

mongoose.set("strictQuery", true);
mongoose.connect('url');

//Get information for the public page
app.get("/", async (req, res) => {
    const education = await SchoolModel.find({});
    const jobs = await JobModel.find({});
    const skills = await SkillModel.find({});
    const projects = await ProjectModel.find({});
    const courses = await CourseModel.find({});
    const contact = await ContactModel.find({});
    const media = await MediaModel.find({});
    res.json({ schools: education, jobs: jobs, skills: skills, projects: projects, courses: courses, contact: contact, media: media });
});


app.listen(PORT, console.log('Server running in at port ' + PORT));