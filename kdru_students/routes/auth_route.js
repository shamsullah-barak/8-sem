const express = require("express");
const Student = require("../models/students.model");

const router = express.Router();

router.get("/signin", (req, res) => {
  res.render("signin_page");
});

router.post("/signin", (req, res) => {
  console.log(req.body);
  res.send("post from nodes");
});

module.exports = router;
