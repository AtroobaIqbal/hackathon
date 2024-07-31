const Student = require('../models/student');

// Middleware to check if student course is completed
async function checkCourseCompletion(req, res, next) {
  const { studentId } = req.body;
  try {
    const student = await Student.findById(studentId);
    if (student && student.courseCompleted) {
      req.student = student; // Store student info in request object
      next(); // Proceed to the next middleware or route handler
    } else {
      res.status(400).send('Course not completed or student not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = checkCourseCompletion;
