const { v4: uuidv4 } = require('uuid');


const checkCourseCompletion = (req, res, next) => {
  if (!req.course.isCompleted) {
    return res.status(400).json({ message: 'Course not completed' });
  }

  //generate uuid for tracking
  const completionId = uuidv4();

  // attach uuid for further use in next middleware
  req.completionId = uuidv4();


  //continue to next middleware
  next();
};

module.exports = checkCourseCompletion;