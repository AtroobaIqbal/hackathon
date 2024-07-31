const Student = require('../models/Student');

const fetchStudent = async (req, res , next) => {
    const { studentId } = req.params;

    try {
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        req.student = student;
        next();
        } catch (error) {
            res.status(500).json({ message: 'server error' });
        }
}
module.exports = fetchStudent;