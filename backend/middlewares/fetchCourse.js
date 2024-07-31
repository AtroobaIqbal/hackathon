const fetchCourse = (req , res , next) => {
    const { courseName } = req.params;
    const course = req.student.courses.find(c => c.name === courseName);

    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }
    req.course = course;
    next();
}

module.exports = fetchCourse;