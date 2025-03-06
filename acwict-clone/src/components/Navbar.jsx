import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <a href="/">
            <h1>ACWICT</h1>
          </a>
        </div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
          <li className="nav-item"><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li className="nav-item"><a href="#programs" onClick={() => setIsOpen(false)}>Programs</a></li>
          <li className="nav-item"><a href="#impact" onClick={() => setIsOpen(false)}>Impact</a></li>
          <li className="nav-item"><a href="#partners" onClick={() => setIsOpen(false)}>Partners</a></li>
          <li className="nav-item"><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li className="nav-item"><a href="#donate" className="btn donate-btn" onClick={() => setIsOpen(false)}>Donate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;