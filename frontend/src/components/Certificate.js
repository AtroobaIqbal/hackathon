import React from "react";
import "./Certificate.css"; // Import CSS for styling
import backgroundImage from "../assets/abstract-geometric-background-in-flat-design-free-vector.jpg"; // Adjust the path as needed
import logo from "../assets/smit.png";




const Certificate = ({ recipientName, courseName, completionDate }) => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  return (
    <div className="certificate-container" style={containerStyle}>
      <div className="certificate-header">
        <img src={logo} alt="" />
        <h1 className="certificate-title">Certificate of Completion</h1>
      </div>
      <div className="certificate-body">
        <p>This certifies that</p>
        <h1 className="recipient-name">Jhon Doe{recipientName}</h1>
        <p>has successfully completed the course</p>
        <h3 className="course-name">Web Development{courseName}</h3>
        <p>awarded this on {completionDate}</p>
        <br />
        <p>12-July-2024</p>

        <div className="certificate-signature">
          <hr className="hr" />
          <p>Authorized Signature</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
