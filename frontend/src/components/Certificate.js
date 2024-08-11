import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Certificate.css";
import backgroundImage from "../assets/abstract-geometric-background-in-flat-design-free-vector.jpg";
import logo from "../assets/smit.png";

const Certificate = ({ recipientName, courseName, completionDate, studentId }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("https://hackathon-pearl-mu.vercel.app");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const downloadPdf = async () => {
    try {
      const response = await axios.post("https://hackathon-pearl-mu.vercel.app", {
        studentId: studentId, 
      }, {
        responseType: 'blob' 
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "certificate.pdf";
      a.click();
      window.URL.revokeObjectURL(url); // Clean up the URL object
    } catch (error) {
      console.error("Error generating certificate:", error);
    }
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  return (
    <div>
      <div className="certificate-container" style={containerStyle}>
        <div className="certificate-header">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            style={{ width: "150px", display: "block", margin: "0 auto" }}
          />
          <h1 className="certificate-title">Certificate of Completion</h1>
        </div>
        <div className="certificate-body">
          <p>This certifies that</p>
          <h1 className="recipient-name">{recipientName}</h1>
          <p>has successfully completed the course</p>
          <h3 className="course-name">{courseName}</h3>
          <p>awarded this on {completionDate}</p>
        </div>
        <div className="certificate-signature">
          <hr className="hr" />
          <p>Authorized Signature</p>
        </div>
      </div>
      <div className="certificate-footer">
        <button className="download-btn" onClick={downloadPdf}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Certificate;


