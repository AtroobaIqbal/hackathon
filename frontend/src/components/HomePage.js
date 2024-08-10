import React, { useState } from 'react';
import NavbarWrapper from '../components/NavbarWrapper'; // Adjust path if needed
import Sidebar from '../components/Sidebar'; // Adjust path if needed
import image from '../assets/smit.png'; 
import image2 from '../assets/image.png'
import './HomePage.css'; // Import specific CSS for HomePage

const HomePage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="home-page-layout">
            <NavbarWrapper onToggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <main className={`home-main-content ${isSidebarOpen ? 'shifted' : ''}`}>
                <div className="content">
                     <div className='image-container'>  
                      <img className='image' src={image} alt="Background" />
                      <img className='image2' src={image2} alt="Background" />
                     <div className='heading'> <h1>GENERATE YOUR CERTIFICATE HERE !!</h1>
                      <a href="/courses" className="link">View Courses</a></div>
                     </div>
                   
                </div>
            </main>
        </div>
    );
};

export default HomePage;
