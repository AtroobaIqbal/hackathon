import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Profile.css'; // Import the CSS file for styling
import profileImg from '../assets/profile.jpg';

function Profile() {
  // Initialize state with localStorage values if available
  const [name, setName] = useState(localStorage.getItem('name') || 'user');
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem('profilePicture') || profileImg);
  
  const [newName, setNewName] = useState('');
  const [newProfilePic, setNewProfilePic] = useState('');

  // Static list of courses with ids for routing
  const courses = [
    { id: 1, title: 'Web Designer' },
    { id: 2, title: 'Graphic Designer' },
    { id: 3, title: 'UI/UX Designer' },
    { id: 4, title: 'Digital Marketer' },
  ];

  useEffect(() => {
    // Save name and profile picture to localStorage when they change
    localStorage.setItem('name', name);
    localStorage.setItem('profilePicture', profilePicture);
  }, [name, profilePicture]);

  const handleNameChange = () => {
    if (newName.trim()) {
      setName(newName);
      setNewName('');
    }
  };

  const handleProfilePicChange = () => {
    if (newProfilePic.trim()) {
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
          <button className="info-button">Profile Info</button>
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
            <div>
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

