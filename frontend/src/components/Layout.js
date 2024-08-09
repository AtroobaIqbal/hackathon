import React, { useState } from 'react';
import NavbarWrapper from './NavbarWrapper'; // Import NavbarWrapper
import Sidebar from './Sidebar';
import './Layout.css'; // Import the CSS file for styling

const Layout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="app-layout">
            <NavbarWrapper onToggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <main className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
