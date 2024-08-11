import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling
import { FaBook, FaUser } from 'react-icons/fa';


const Sidebar = ({ isOpen, onClose }) => {


    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="sidebar-close" onClick={onClose}>
                <i className="fas fa-times"></i>
            </button>
            <aside className="Sidebar">
                <ul>
                    <li className="sidebar-item">
                        <a href="/courses" className="sidebar-link" >
                            <FaBook className="icon" /> Courses
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/profile" className="sidebar-link" >
                            <FaUser className="icon" /> Profile
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
