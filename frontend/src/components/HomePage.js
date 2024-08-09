import React from 'react';
import image from '../assets/smit.png'; 
import './HomePage.css'; // Import specific CSS for HomePage


const HomePage = () => {
    return (
                       
        <div className="content">
            <img className='image' src={image} alt="Background" />
            <h1>GENERATE YOUR CERTIFICATE HERE !!</h1>
            <a href="/courses" className="link">View Courses</a>
        </div>
    
    );
};

export default HomePage;
