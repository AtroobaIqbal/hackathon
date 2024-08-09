const express = require('express');
const bodyParser = require('body-parser');
const PDFDocument = require('pdfkit');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());

const Student = require('./models/student'); // Import Student model

// Route to get students list
app.get('/students', async (req, res) => {
  console.log('Route accessed');
  try {
    const students = await Student.find();
    console.log('Data retrieved:', students);
    res.json(students);
  } catch (err) {
    console.error('Error occurred:', err);
    res.status(500).send(err);
  }
});

// // Route to generate certificate
app.post('/generate-certificate', async (req, res) => {
  const { studentId } = req.body;
  try {
    const student = await Student.findById(studentId);
    if (student && student.courseCompleted) {
      const certificateId = uuidv4();
      const doc = new PDFDocument();
      let buffers = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        const pdfData = Buffer.concat(buffers);
        res.contentType('application/pdf');
        res.send(pdfData);
      });

      //add certificate content with uuid
      doc.fontSize(25).text('Certificate of Completion', { align: 'center' });
      doc.moveDown();
      doc.fontSize(20).text(`This is to certify that ${student.name}`, { align: 'center' });
      doc.fontSize(20).text(`has successfully completed the course ${student.course}.`, { align: 'center' });
      doc.moveDown();
      doc.fontSize(15).text(`Certificate ID: ${certificateId}`, { align: 'center'});

      doc.end();
    } else {
      res.status(400).send('Course not completed or student not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
