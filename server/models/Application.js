const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  teacher_name: String,
  job_title: String,
  applied_on: { type: Date, default: Date.now },
  resume_url: String,
  image_url: String,
  note: String,
  status: String,
});

// Specify the correct collection here (test.resumes)
const Application = mongoose.model('Application', applicationSchema, 'resumes');

module.exports = Application;
