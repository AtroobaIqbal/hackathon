const { v4: uuidv4 } = require('uuid');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const generateCertificate = (req, res) => {
    const certificateId = uuidv4();
    const certificatePath = path.join(__dirname, `../certificates/${req.student.name}_${req.course.name}_${certificateId}_certificate.pdf`);

    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(certificatePath));

    // add certificate content
    doc.fontSize(25).text('Certificate of Completion', { align: 'center' });
    doc.moveDown();
    doc.fontSize(20).text(`This certifies that ${req.student.name}`, { align: 'center' });
    doc.text(`has successfully completed the course: ${req.course.name}`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(15).text(`Completion Date: ${req.course.completionDate.toDateString()}`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Certificate ID: ${certificateId}`, { align: 'center'});
    doc.end();

    // return path og generated certificate
    res.join({ message: 'certificate generated', certificatePath , certificateId});
}

module.exports = generateCertificate;