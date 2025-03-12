import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Sidebar.css';

const categories = [
  { name: 'C1' },
  { name: 'C2' },
  { name: 'C3' },
  { name: 'C4' },
  { name: 'C5' },
  { name: 'C6' },
  { name: 'C7' },
  { name: 'C8' }
];

const subItems = ['Narrative', 'Outcome', 'KPI'];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar (for mobile)
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger icon for mobile */}
      <div className="sidebar-hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>
      
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h2>DEP</h2>
          <div className="sidebar-close" onClick={toggleSidebar}>
            <FaTimes />
          </div>
        </div>
        <ul className="sidebar-menu">
          {categories.map((category, index) => (
            <li className="sidebar-item" key={index}>
              <span className="sidebar-category">{category.name}</span>
              <ul className="sidebar-submenu">
                {subItems.map((sub, subIndex) => (
                  <li key={subIndex} className="sidebar-subitem">{sub}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
