const mongoose= require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: String,
  title: String,
  experience: String,
  hourRate: String,
  location: String,
  skills: [String],
  description: String,
  image: String
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;