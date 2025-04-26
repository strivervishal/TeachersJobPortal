// models/userJobs.js
const mongoose = require('mongoose');

const userJobSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Job'
  },
  type: {
    type: String,
    enum: ['saved', 'applied'],
    required: true
  },
  userId: {
    type: String,
    default: 'guest' // no real authentication, default guest user
  },
  title: String,
  company: String,
  location: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserJob', userJobSchema);
