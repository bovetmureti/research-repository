import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container-custom py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-primary font-bold text-2xl">ACWICT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>
            <Link to="/programs" className="text-gray-700 hover:text-primary font-medium">Programs</Link>
            <Link to="/events" className="text-gray-700 hover:text-primary font-medium">Events</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>About Us</Link>
            <Link to="/programs" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Programs</Link>
            <Link to="/events" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Events</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header