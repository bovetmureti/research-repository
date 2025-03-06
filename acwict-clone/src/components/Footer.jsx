import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>ACWICT</h3>
            <p>
              African Center for Women, Information and Communications Technology is a non-profit organization dedicated to empowering women and youth through technology training.
            </p>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
          
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#donate">Donate</a></li>
            </ul>
          </div>
          
          <div className="contact-info">
            <h3>Contact Us</h3>
            <ul>
              <li><FaMapMarkerAlt /> 123 Technology Road, Nairobi, Kenya</li>
              <li><FaPhone /> +254 123 456 789</li>
              <li><FaEnvelope /> info@acwict.org</li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} ACWICT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;