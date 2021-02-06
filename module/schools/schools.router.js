const express = require("express");
const router = express.Router();
const {
  getSchools,
  createSchool,
  updateSchool,
  deleteSchool,
} = require("./schools.controller");

router.get("/", getSchools);
router.post("/", createSchool);
router.put("/:school_id", updateSchool);
router.delete("/:school_id", deleteSchool);

module.exports = router;
