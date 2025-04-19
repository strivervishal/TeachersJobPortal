// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const { upload } = require('../utils/cloudinary');

router.post('/', upload.single('logo'), async (req, res) => {
  try {
    const {
      jobTitle,
      jobDescription,
      companyDescription,
      isAgreed,
      jobCategory,
      jobType,
      applicationDeadline,
      salaryCurrency,
      companyName,
      companyWebsite,
      companyIndustry,
      facebook,
      linkedin,
      twitter,
      instagram,
      recruiterName,
      recruiterEmail,
    } = req.body;

    const logoUrl = req.file?.path || "";

    const newJob = new Job({
      jobTitle,
      jobDescription,
      companyDescription,
      isAgreed: isAgreed === 'true',
      jobCategory,
      jobType,
      applicationDeadline,
      salaryCurrency,
      companyName,
      companyWebsite,
      companyIndustry,
      socialLinks: {
        facebook,
        linkedin,
        twitter,
        instagram,
      },
      recruiter: {
        fullName: recruiterName,
        email: recruiterEmail,
      },
      logoUrl,
    });

    await newJob.save();
    res.status(201).json({ message: "Job posted successfully", job: newJob });
  } catch (err) {
    console.error("Error posting job:", err);
    res.status(500).json({ message: "Failed to post job" });
  }
});

module.exports = router;
