const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  phone: String
});

module.exports = mongoose.model('Student', studentSchema);
// This code defines a Mongoose schema for the Student model, which includes fields for name, email, course, and phone.