import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../index.css';
import logoImage from "../assets/logo-kictanet.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Wrapper for left-aligned logo and menu items */}
        <div className="navbar-left">
          <div className="logo">
            <a href="/">
              <img src={logoImage} alt="KICTANET" className='logo-img'/>
            </a>
          </div>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="/aboutus" onClick={() => setIsOpen(false)}>Who We Are</a>
            </li>
            <li className="nav-item">
              <a href="#dep" onClick={() => setIsOpen(false)}>DEP</a>
            </li>
            <li className="nav-item">
              <a href="#publications" onClick={() => setIsOpen(false)}>Publications</a>
            </li>
            <li className="nav-item">
              <a href="#resources" onClick={() => setIsOpen(false)}>Resources</a>
            </li>
            <li className="nav-item">
              <a href="#donate" className="btn donate-btn" onClick={() => setIsOpen(false)}>Donate</a>
            </li>
          </ul>
        </div>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
