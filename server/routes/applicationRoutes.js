const express = require("express");
const router = express.Router();
const {
  getApplications,
  updateApplication,
  deleteApplication, // ⬅️ import it
} = require("../controllers/applicationController");

router.get("/", getApplications);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication); 

module.exports = router;
