const express = require("express");
const Student = require("../models/students.model");
const {
  returnSigninForm,
  saveStudent,
} = require("../controllers/student.controller");

const router = express.Router();

// student routes
router.get("/registration", returnSigninForm);
router.post("/registration", saveStudent);

module.exports = router;
