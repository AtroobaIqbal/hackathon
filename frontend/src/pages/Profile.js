import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Profile.css'; // Import the CSS file for styling
import { FaInfoCircle } from 'react-icons/fa'; // Info icon
import profileImg from '../assets/profile.jpg';

function Profile() {
  const [name, setName] = useState('John Doe');
  const [profilePicture, setProfilePicture] = useState(profileImg);
  const [newName, setNewName] = useState('');
  const [newProfilePic, setNewProfilePic] = useState('');

  // Static list of courses with ids for routing
  const courses = [
    { id: 1, title: 'Web Designer' },
    { id: 2, title: 'Graphic Designer' },
    { id: 3, title: 'UI/UX Designer' },
    { id: 4, title: 'Digital Marketer' },
  ];

  const handleNameChange = () => {
    if (newName) {
      setName(newName);
      setNewName('');
    }
  };

  const handleProfilePicChange = () => {
    if (newProfilePic) {
      setProfilePicture(newProfilePic);
      setNewProfilePic('');
    }
  };

  return (
    <div className="student-profile">
      <div className="profile-header">
        <div className="profile-info">
          <h1 className="student-name">{name}</h1>
          <img src={profilePicture} alt="Profile" className="profile-picture" />
          <button className="info-button">
            <FaInfoCircle /> Profile Info
          </button>
          <div className="edit-profile">
            <div>
              <input
                type="text"
                placeholder="New name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={handleNameChange}>Change Name</button>
            </div>
            <input
              type="text"
              placeholder="New profile picture URL"
              value={newProfilePic}
              onChange={(e) => setNewProfilePic(e.target.value)}
            />
            <button onClick={handleProfilePicChange}>Change Profile Picture</button>
          </div>
        </div>
      </div>
      <div className="profile-content">
        <h2>Courses Enrolled</h2>
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.id} className="course-item">
              <Link to={`/courses/${course.id}`}>{course.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
