const Impact = () => {
    const stats = [
      { id: 1, number: "10,000+", text: "Women Trained" },
      { id: 2, number: "85%", text: "Employment Rate" },
      { id: 3, number: "24", text: "African Countries" },
      { id: 4, number: "300+", text: "Partner Organizations" }
    ];
  
    return (
      <section id="impact" className="impact">
        <div className="container">
          <div className="section-header">
            <h2>Our Impact</h2>
            <div className="underline"></div>
          </div>
          <div className="stats-container">
            {stats.map(stat => (
              <div key={stat.id} className="stat-box">
                <h3>{stat.number}</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
          <div className="testimonials">
            <h3>Success Stories</h3>
            <div className="testimonial">
              <p>"The ACWICT program completely transformed my career. From having basic computer skills to now working as a full-stack developer, the journey has been incredible."</p>
              <div className="testimonial-author">
                <p>- Jane Doe, Software Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Impact;
  