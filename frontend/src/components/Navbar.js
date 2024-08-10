import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo2 from '../assets/smit.png'; // Import your logo image
import { Link } from 'react-router-dom';
import { FaBars, FaSignOutAlt } from 'react-icons/fa'; // Import React Icons

const Navbar = ({ onToggleSidebar }) => {
    const handleLogout = () => {
        // Implement logout logic here, e.g., clearing auth tokens
        window.location.href = './signup'; // Redirect to login page
    };
    return (
            <nav className="navbar">
                <button className="navbar-toggle" onClick={onToggleSidebar}>
                    <FaBars /> {/* Font Awesome hamburger icon */}
                </button>
                <div className="navbar-logo">
                    <img src={logo2} alt="Logo" className="navbar-logo-img" />
                    <ul className='navbar-link'>
                      <Link to="/" className="navbar-link">Home</Link>
                    </ul>  
                    <button className="navbar-logout" onClick={handleLogout} >
                        <FaSignOutAlt /> {/* Logout icon */ }
                    </button>  
                </div>
            
            </nav>
    );
};

export default Navbar;
