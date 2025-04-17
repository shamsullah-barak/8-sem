const Joi = require("joi");
const { studentRegistration } = require("../validations/student.validation");
const Student = require("../models/students.model");

const returnSigninForm = (req, res) => {
  res.render("student_registration");
};

const saveStudent = (req, res) => {
  const { error, value } = studentRegistration.validate(req.body);

  console.log({ error });
  if (error) {
    return res.send("student validation failed");
  }

  const {
    studentName,
    studentId,
    faculty,
    phone: phoneNumber,
    email,
  } = req.body;

  const student = new Student({
    studentName,
    registrationId: studentId,
    faculty,
    phoneNumber,
    email,
  });

  student.save().then((result) => {
    console.log({ result });
    return res.send("Your data is sent to database ");
  });
};

module.exports = {
  returnSigninForm,
  saveStudent,
};
