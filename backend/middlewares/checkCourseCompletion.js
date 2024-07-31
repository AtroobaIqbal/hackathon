const checkCourseCompletion = (req, res, next) => {
  if (!req.course.isCompleted) {
    return res.status(400).json({ message: 'Course not completed' });
  }

  next();
};

module.exports = checkCourseCompletion;