import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'; // Default import



const NavbarWrapper = ({ onToggleSidebar }) => {
    const location = useLocation();

    // Only render Navbar if the path is '/'
    if (location.pathname === '/') {
        return <Navbar onToggleSidebar={onToggleSidebar} />;
    }

    return null;
};

export default NavbarWrapper;
