const mongoose = require("mongoose");

const schema = mongoose.Schema({
  studentName: String,
  registrationId: String,
  faculty: String,
  email: String,
  phoneNumber: String,
});

const Student = mongoose.model("student", schema);

module.exports = Student;
