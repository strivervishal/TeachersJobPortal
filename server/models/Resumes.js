const mongoose = require("mongoose");

const resumesSchema = new mongoose.Schema({
  teacher_name: String,
  job_title: String,
  applied_on: Date,
  status: String,
  note: String,

});

const Resumes = mongoose.model("Resumes", resumesSchema); 

module.exports = Resumes;
