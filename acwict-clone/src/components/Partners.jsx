const Partners = () => {
    return (
      <section id="partners" className="partners">
        <div className="container">
          <div className="section-header">
            <h2>Our Partners</h2>
            <div className="underline"></div>
          </div>
          <div className="partners-grid">
            {/* Replace with actual partner logos */}
            {[1, 2, 3, 4, 5, 6].map(num => (
              <div key={num} className="partner-logo">
                <img src={`/api/placeholder/150/80`} alt={`Partner ${num}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Partners;