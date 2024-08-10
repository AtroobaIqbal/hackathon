import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import Profile from './pages/Profile';
import StatsSection from './pages/StatsSection';
import CalendarPage from './pages/CalendarPage';
import Certificate from './components/Certificate'; // Assume you have a HomePage component
import './App.css'; // Import global CSS
import HomePage from './components/HomePage';

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/admin" element={<StatsSection />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/courses/:id" element={<Courses/>} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/certificate" element={<Certificate />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
        </Router>
    );
}

export default App;




