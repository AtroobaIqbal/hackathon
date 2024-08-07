const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  _id:{
    type: String,
    default: uuidv4,
  },
  name: {type: String, required: true},
  isCompleted: { type: Boolean , default: false},
  completionDate: { type: Date, default: null},
})

const studentSchema = new mongoose.Schema({
  _id:{
    type: String,
    default: uuidv4,
  },
  name: { type: String, required: true},
  course: [courseSchema],
  courseCompleted: Boolean,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;