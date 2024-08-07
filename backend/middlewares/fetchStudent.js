const { v4: uuidv4 } = require('uuid');
const Student = require('../models/Student');

const fetchStudent = async (req, res , next) => {
    const { studentId } = req.params;

    try {
        const student = await Student.findOne({_id: studentId});
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        
        // attach a uuid for further processing
        student.uuid = uuidv4();

        req.student = student;
        next();
        } catch (error) {
            res.status(500).json({ message: 'server error' });
        }
}
module.exports = fetchStudent;