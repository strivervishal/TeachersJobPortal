const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 4;
  const skip = (page - 1) * limit;
  const total = await Resume.countDocuments();
  const resumes = await Resume.find().skip(skip).limit(limit);
  res.json({
    resumes,
    currentPage: page,
    totalPages: Math.ceil(total / limit)
  });
});

module.exports = router;
