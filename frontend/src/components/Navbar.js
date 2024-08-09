import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo2 from '../assets/smit.png'; // Import your logo image
import { Link } from 'react-router-dom';
import {  FaSignOutAlt } from 'react-icons/fa'; // Import React Icons

const Navbar = ({ onToggleSidebar }) => {
    const handleLogout = () => {
        // Implement logout logic here, e.g., clearing auth tokens
        window.location.href = './signup'; // Redirect to login page
    };

    return ( 
        <div>
            <nav className="navbar">
                <button onClick={onToggleSidebar}>
                <div className="navbar-logo" >
                    <img src={logo2} alt="Logo" className="navbar-logo-img" />
                </div></button>
                <ul className='navbar-links'> {/* Ensure CSS class matches */}
                    <li>
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    {/* Add more links here as needed */}
                </ul>
                <button className="navbar-logout" onClick={handleLogout}>
                    <FaSignOutAlt /> {/* Logout icon */}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
