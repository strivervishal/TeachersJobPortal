// models/SavedJob.js
const mongoose = require('mongoose');

const SavedJobSchema = new mongoose.Schema({
  jobId: String,
  title: String,
  company: String,
  location: String,
});

module.exports = mongoose.model('SavedJob', SavedJobSchema);
