const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  logo: String,
  title: String,
  company: String,
  type: String,
  date: String,
  status: String
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);


