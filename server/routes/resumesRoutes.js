const express = require("express");
const router = express.Router();
const {
  getResumes,
  updateResume,
  deleteResume,
} = require("../controllers/resumesController");

router.get("/", getResumes);
router.put("/:id", updateResume);
router.delete("/:id", deleteResume);

module.exports = router;
