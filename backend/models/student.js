const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {type: String, required: true},
  isCompleted: { type: Boolean , default: false},
  completionDate: { type: Date, default: null},
})

const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  courseCompleted: Boolean,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;