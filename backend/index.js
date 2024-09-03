const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.use("/api/certificate", certificateRoutes);

// Dummy data
const students = [
  {
    id: 1,
    name: "John Doe",
    courses: ["web development", "graphic designing"],
  },
  { id: 2, name: "Jane Smith", courses: ["flutter", "python"] },
];

// Route to get course list
app.get("/courses/:studentId", async (req, res) => {
  const studentId = req.params.studentId;
  try {
    const student = students.find((s) => s.id === parseInt(studentId));
    if (student) {
      res.json({ courses: student.courses });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Route to get course details
app.get("/course/:studentId/:courseName", (req, res) => {
  const { studentId, courseName } = req.params;
  try {
    const student = students.find((s) => s.id === parseInt(studentId));
    if (!student) return res.status(404).json({ message: "Student not found" });

    const course = student.courses.find(
      (c) => c.toLowerCase() === courseName.toLowerCase()
    );
    if (!course) return res.status(404).json({ message: "Course not found" });

    res.json({ course });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Route to generate certificate if course is completed
app.post("/generate-certificate", async (req, res) => {
  const { studentId, courseName } = req.body;
  try {
    const student = students.find((s) => s.id === parseInt(studentId));
    if (!student) return res.status(404).json({ message: "Student not found" });

    const course = student.courses.find(
      (c) => c.toLowerCase() === courseName.toLowerCase()
    );
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Here you would check if the course is completed and then generate the certificate
    // Assuming course completion is always true for this example
    const certificatePath = `./certificates/${student.name}_${course}_certificate.pdf`;

    // Generate PDF (dummy code)
    // const doc = new PDFDocument();
    // doc.pipe(fs.createWriteStream(certificatePath));
    // doc.fontSize(25).text('Certificate of Completion', { align: 'center' });
    // doc.moveDown();
    // doc.fontSize(20).text(`This certifies that ${student.name}`, { align: 'center' });
    // doc.text(`has successfully completed the course: ${course}`, { align: 'center' });
    // doc.moveDown();
    // doc.fontSize(15).text(`Completion Date: ${new Date().toDateString()}`, { align: 'center' });
    // doc.end();

    res.json({ message: "Certificate generated", certificatePath });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Route for downloading the certificate
app.get("/download-certificate", (req, res) => {
  const { certificatePath } = req.query;
  res.download(certificatePath, (err) => {
    if (err) {
      res.status(500).json({ message: "Error downloading the certificate" });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
