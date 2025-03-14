const About = () => {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About KICTANET</h2>
            <div className="underline"></div>
          </div>
          <div className="about-content">
            <div className="about-image">
              <img src="/api/placeholder/450/300" alt="Women in technology" />
            </div>
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                KICTANET is dedicated to empowering women and youth in Africa through technology training and professional development programs that enhance their participation in the global economy.
              </p>
              <h3>Our Vision</h3>
              <p>
                We envision a world where women and youth in Africa have equal access to technology and the skills needed to succeed in the digital economy.
              </p>
              <a href="#about-more" className="btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;