const Joi = require("joi");

const studentRegistration = Joi.object({
  name: Joi.string().required(),
  studentId: Joi.string().required(),
  faculty: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  age: Joi.number().greater(18),
  dob: Joi.date(),
});

module.exports = {
  studentRegistration,
};
