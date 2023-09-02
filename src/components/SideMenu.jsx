import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaTachometerAlt } from 'react-icons/fa';
import './SideMenu.css'; // Importing the CSS file

function SideMenu({ isMenuOpen }) {
    return (
        <aside className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="menu-item"><FaHome /> Home</Link>
            <Link to="/Dashboard" className="menu-item"><FaTachometerAlt /> Dashboard</Link>
            <Link to="/OrderPage" className="menu-item"><FaShoppingCart /> My Orders</Link>
        </aside>
    );
}

export default SideMenu;
