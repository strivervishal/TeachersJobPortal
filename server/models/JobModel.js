// models/JobModel.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  featured: { type: Boolean, default: false },
  image: { type: String },
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
