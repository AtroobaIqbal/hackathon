const pdfkit = require("pdfkit");

exports.generateCertificate = (req, res) => {
  const { courseName } = req.body;
  const doc = new pdfkit();

  doc.fontSize(25).text(`Certificate of Completion`, { align: "center" });
  doc.moveDown();
  doc
    .fontSize(20)
    .text(`This is to certify that ${req.user.name}`, { align: "center" });
  doc.moveDown();
  doc
    .fontSize(15)
    .text(`Has successfully completed the course: ${courseName}`, {
      align: "center",
    });
  doc.moveDown();
  doc
    .fontSize(10)
    .text(`Date: ${new Date().toLocaleDateString()}`, { align: "center" });

  res.setHeader("Content-Type", "application/pdf");
  doc.pipe(res);
  doc.end();
};
