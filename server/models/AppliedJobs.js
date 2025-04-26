// models/AppliedJob.js
const mongoose = require('mongoose');

const AppliedJobSchema = new mongoose.Schema({
  jobId: String,
  title: String,
  company: String,
  location: String,
});

module.exports = mongoose.model('AppliedJob', AppliedJobSchema);
