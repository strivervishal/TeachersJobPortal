// routes/jobRoutes.js
const express = require('express');
const Job = require('../models/JobModel');  // Assuming Job model is defined in models/JobModel.js
const router = express.Router();
const UserJob = require('../models/userJobs');

// Get jobs with pagination
router.get('/', async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  try {
    const jobs = await Job.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalJobs = await Job.countDocuments();
    const totalPages = Math.ceil(totalJobs / limit);

    res.json({
      jobs,
      currentPage: Number(page),
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

// Toggle featured status
router.patch('/:id/toggle-featured', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    job.featured = !job.featured;  // Toggle the featured field
    await job.save();
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job' });
  }
});

// Save a job
router.post('/save', async (req, res) => {
  try {
    const { jobId, title, company, location } = req.body;
    // In real app, you’d associate this with a user
    console.log('Job saved:', { jobId, title, company, location });
    res.status(201).json({ message: 'Job saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save job' });
  }
});

// Apply to a job
router.post('/apply', async (req, res) => {
  try {
    const { jobId, title, company, location } = req.body;
    // In real app, you'd store this in an "applications" collection or user record
    console.log('Job applied:', { jobId, title, company, location });
    res.status(201).json({ message: 'Job application successful' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to apply for job' });
  }
});


module.exports = router;
