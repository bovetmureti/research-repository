const Programs = () => {
    const programsList = [
      {
        id: 1,
        title: "Digital Literacy",
        description: "Providing essential digital skills to women and girls across Africa.",
        icon: "💻"
      },
      {
        id: 2,
        title: "Coding Academy",
        description: "Teaching programming and web development skills to build the next generation of female developers.",
        icon: "👩‍💻"
      },
      {
        id: 3,
        title: "Entrepreneurship",
        description: "Supporting women entrepreneurs with tech skills and business development resources.",
        icon: "📊"
      },
      {
        id: 4,
        title: "STEM Education",
        description: "Encouraging girls to pursue careers in Science, Technology, Engineering, and Mathematics.",
        icon: "🔬"
      }
    ];
  
    return (
      <section id="programs" className="programs">
        <div className="container">
          <div className="section-header">
            <h2>Our Programs</h2>
            <div className="underline"></div>
          </div>
          <div className="programs-grid">
            {programsList.map(program => (
              <div key={program.id} className="program-card">
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <a href={`#program-${program.id}`} className="btn-text">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Programs;
  