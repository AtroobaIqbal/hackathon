import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Courses from './pages/Courses';
import Profile from './pages/Profile';
import image from './assets/smit.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import StatsSection from './pages/StatsSection';


function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <Router>
            <div className="App">
                <Navbar onToggleSidebar={toggleSidebar} />
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
              
               
                <main className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
                    <Routes>
                        <Route path="/admin" element={<StatsSection/>} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/courses/:id" element={<Courses />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route
                            path="/"
                            element={
                                <div className="content">
                                    <img src={image} alt="Background" />
                                    <h1>GENERATE YOUR CERTIFICATE HERE !!</h1>
                                    <a href="/courses" className="link">View Courses</a>
                                </div>
                            }
                            
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
