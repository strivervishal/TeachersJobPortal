// models/JobAlert.js
const mongoose = require('mongoose');

const jobAlertSchema = new mongoose.Schema({
  name: String,
  keyword: String,
  contract: String,
  frequency: String,
});

module.exports = mongoose.model('JobAlert', jobAlertSchema);
