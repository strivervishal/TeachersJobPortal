const mongoose = require('mongoose');
const Resumes = require('../models/Resumes');  // Import Resumes model

// GET all resumes
exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resumes.find();
    res.json(resumes);
  } catch (error) {
    console.error('Error fetching resumes:', error);
    res.status(500).json({ message: "Server error" });
  }
};

// PUT to update note/status
exports.updateResume = async (req, res) => {
  const { id } = req.params;
  const { note, status } = req.body;

  try {
    const updatedResume = await Resumes.findByIdAndUpdate(
      id,
      { note, status },
      { new: true }
    );
    res.json(updatedResume);
  } catch (error) {
    console.error('Error updating resume:', error);
    res.status(500).json({ message: "Failed to update resume" });
  }
};

// DELETE resume
exports.deleteResume = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid resume ID" });
  }

  try {
    const deletedResume = await Resumes.findByIdAndDelete(id);
    if (!deletedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.json({ message: "Resume deleted successfully" });
  } catch (error) {
    console.error('Error deleting resume:', error);
    res.status(500).json({ message: "Failed to delete resume" });
  }
};
