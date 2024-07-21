import React from "react";
import "./Certificate.css"; // Import CSS for styling

const Certificate = ({ recipientName, courseName, completionDate }) => {
  return (
    <div className="certificate-container">
      <div className="certificate-header">
        <h2 className="certificate-title">Certificate of Completion</h2>
      </div>
      <div className="certificate-body">
        <div className="certificate-text">
          <p>This certifies that</p>
          <h1 className="recipient-name">{recipientName}</h1>
          <p>has successfully completed the course</p>
          <h3 className="course-name">{courseName}</h3>
          <p>awarded this {completionDate}</p>
        </div>
        <div className="certificate-signature">
          <p>Authorized Signature</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
