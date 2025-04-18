const mongoose = require('mongoose');  // Add this line
const Application = require('../models/Application');  // Import Application model

// GET all applications
exports.getApplications = async (req, res) => {
  try {
    const apps = await Application.find();
    res.json(apps);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ message: "Server error" });
  }
};

// PUT to update note/status
exports.updateApplication = async (req, res) => {
  const { id } = req.params;
  const { note, status } = req.body;

  try {
    const updatedApp = await Application.findByIdAndUpdate(
      id,
      { note, status },
      { new: true }
    );
    res.json(updatedApp);
  } catch (error) {
    console.error('Error updating application:', error); // Added logging for error tracking
    res.status(500).json({ message: "Failed to update application" });
  }
};

// DELETE application
exports.deleteApplication = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid application ID" });
  }

  try {
    const deletedApp = await Application.findByIdAndDelete(id);
    if (!deletedApp) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.json({ message: "Application deleted successfully" });
  } catch (error) {
    console.error('Error deleting application:', error);
    res.status(500).json({ message: "Failed to delete application" });
  }
};
