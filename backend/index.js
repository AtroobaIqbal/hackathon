const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes.js");
// const adminRoutes = require("./routes/adminRoutes");
// const studentRoutes = require("./routes/studentRoutes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const certificateRoutes = require('./routes/certificate');
const fetchStudent = require("./middlewares/fetchStudent");
const fetchCourse = require("./middlewares/fetchCourse");
const checkCourseCompletion = require("./middlewares/checkCourseCompletion");
const generateCertificate = require("./middlewares/generateCertificate");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/student", studentRoutes);

//dummy data
const students = [
  {
    id: 1,
    name: "John Doe",
    courses: ["web development", "graphic designing"],
  },
  { id: 1, name: "Jane Smith", courses: ["flutter", "python"] },
];

app.get('/test', function (req, res) {
  res.send('hello world')
})
// //Routes
// app.use('/generate-certificate', certificateRoutes);

// //route to get course list
// app.get('/courses/:studentId', async (req, res) => {
//     const studentId = req.params.studentId;
//     try {
//         const student = await Student.findById(studentId);
//         if (student) {
//             res.json({ courses: student.courses });
//         } else {
//             res.status(404).json({ message: 'Student not found' });
//         }
//     } catch (err) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// //route to get course detail
// app.get('/course/:studentId/:courseName', async (req, res) => {
//     const {studentId, courseName} = req.params;
//     try {
//         const student = await Student.findById(studentId);
//         if (!student) return res.status(404).json({ message: 'student not found'});
//         const course = student.course.find(c => c.name === courseName);
//         if (!course) return res.status(404).json({ message: 'course not found'});
//         res.json({course});
//     } catch (err) {
//         res.status(500).json({ message: 'server error'});
//     }
// })

// // route to get certificate is course is complete
// app.post('/generate-certificate', async (req, res) => {
//     const { studentId , courseName} = req.body;
//     try {
//         const student = await Student.findById(studentId);
//         if (!student) return res.status(404).json({ message: 'student not found'});

//         const course = student.courses.find(c => c.name === courseName);
//         if (!course) return res.status(404).json({ message: 'course not found'});

//         if (!course.isCompleted) {
//         return res.status(400).json({ message: 'course is not completed'});
//     }

//     //pdf generation
//     const doc = new PDFDocument;
//     const certificatePath = ./certificates/${student.name}_${course.name}_certificate.pdf;

//     doc.pipe(fs.createWriteStream(certificatePath));
//     doc.fontsize(25).text('Certificate of Completion', { align: 'center'});
//     doc.moveDown();
//     doc.fontsize(20).text(This certifies that ${student.name}, { align: 'center'});
//     doc.text(has successfully completed the course: ${course.name}, { align: 'center'});
//     doc.moveDown();
//     doc.fontsize(15).text(Completion Date: ${course.completionDate.toDateString()}, { align: 'center'});
//     doc.end();

//     //path of the generated certificate
//     res.json({ message: 'Certificate generated', certificatePath });
// } catch (err) {
//

// route for course details
app.get(
  "/course/:studentId/:courseName",
  fetchStudent,
  fetchCourse,
  (req, res) => {
    res.json({ course: req.course });
  }
);

//route to get certificate if course is completed
app.post(
  "./generate-certificate",
  // fetchStudent,
  // fetchCourse,
  checkCourseCompletion,
  generateCertificate
);

//route for download the pdf
app.get("/download-certificate", (req, res) => {
  const { certificatePath } = req.query;
  res.download(certificatePath, (err) => {
    if (err) {
      res.status(500).json({ message: "error downloading the certificate" });
    }
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



