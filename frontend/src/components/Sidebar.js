import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling
import { FaBook, FaUser } from 'react-icons/fa';


const Sidebar = ({ isOpen, onClose }) => {
    const handleLogout = () => {
        // Implement logout logic here, e.g., clearing auth tokens
        window.location.href = './signup'; // Redirect to login page
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="sidebar-close" onClick={onClose}>
                <i className="fas fa-times"></i>
            </button>
            <aside className="Sidebar">
                <ul>
                    <li className="sidebar-item">
                        <a href="/courses" className="sidebar-link" target="_blank" rel="noopener noreferrer">
                            <FaBook className="icon" /> Courses
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/profile" className="sidebar-link" target="_blank" rel="noopener noreferrer">
                            <FaUser className="icon" /> Profile
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
