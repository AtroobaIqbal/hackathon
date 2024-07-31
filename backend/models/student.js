const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  courseCompleted: Boolean,
});

const Student = mongoose.model('Student', studentSchema);
