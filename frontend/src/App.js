import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import Profile from './pages/Profile';
import StatsSection from './pages/StatsSection';
import CalendarPage from './pages/CalendarPage';
import Certificate from './components/Certificate';
import Signup from './components/signup/Signup';
import Signin from './components/signIn/SignIn';


function App() {
    return (
        <Router> 
            <div className="App">
            <NavbarWrapper onToggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
           
                
                <main className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
                    <Routes>
                        <Route path="/admin" element={<StatsSection />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/courses/:id" element={<Courses />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/calendar" element={<CalendarPage />} />
                        <Route path="/certificate" element={<Certificate />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route
                            path="/"
                            element={ 
                           
                                <div className="content">
                                    <img className='image' src={image} alt="Background" />
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
