// models/job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobTitle: String,
  jobDescription: String,
  companyDescription: String,
  isAgreed: Boolean,
  jobCategory: String,
  jobType: String,
  applicationDeadline: String,
  salaryCurrency: String,
  companyName: String,
  companyWebsite: String,
  companyIndustry: String,
  socialLinks: {
    facebook: String,
    linkedin: String,
    twitter: String,
    instagram: String,
  },
  recruiter: {
    fullName: String,
    email: String,
  },
  logoUrl: String,
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
