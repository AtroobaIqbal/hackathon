import React, { useState } from 'react';
import './Courses.css'; // Import CSS for styling

// Sample data for courses
const courseData = [
  { id: 1, title: 'Web Designer', description: 'Learn how to design stunning websites.' },
  { id: 2, title: 'Graphic Designer', description: 'Master graphic design tools and techniques.' },
  { id: 3, title: 'UI/UX Designer', description: 'Create user-friendly and engaging interfaces.' },
  { id: 4, title: 'Digital Marketer', description: 'Understand digital marketing strategies and tactics.' },
  { id: 5, title: 'Data Scientist', description: 'Analyze and interpret complex data sets.' },
  { id: 6, title: 'SEO Specialist', description: 'Improve website visibility and ranking on search engines.' },
  { id: 7, title: 'Content Writer', description: 'Develop skills to create engaging content.' },
  { id: 8, title: 'Mobile App Developer', description: 'Build applications for mobile devices.' }
];

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
  };

  const handleClosePopup = () => {
    setSelectedCourse(null);
  };


  const handleGenerate = () => {
    window.location.href = '/Certificate';
  };


  return (
    <div className="course-container">
      <h1 className="course-heading">SELECT COURSES</h1>
      <h3 className='course-heading2'>GENERATE YOUR CERTIFICATE !!</h3>
      <div className="course-cards">
        {courseData.map(course => (
          <div 
            key={course.id} 
            className="course-card" 
            onClick={() => handleCardClick(course)}
          >
            <h2>{course.title}</h2>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={handleClosePopup}>×</button>
            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.description}</p>
            <button className="generate-button" onClick={handleGenerate}>Generate</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
