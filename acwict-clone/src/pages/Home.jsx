import { Link } from 'react-router-dom'
import { FaUsers, FaLaptopCode, FaHandshake, FaGraduationCap, FaChartLine } from 'react-icons/fa'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container-custom relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Women Through Technology
            </h1>
            <p className="text-xl mb-8">
              Bridging the gender gap in ICT through education, mentorship, and professional development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/programs" className="btn-primary">Our Programs</Link>
              <Link to="/contact" className="btn-secondary">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">About ACWICT</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                The African Center for Women, Information & Communications Technology (ACWICT) is a Kenya-based 
                ICT for Development (ICT4D) organization whose mission is to promote women's access to and knowledge of 
                information and communication technologies.
              </p>
              <p className="text-gray-700 mb-6">
                Since our founding in 2007, we have trained over 25,000 young people in various technology skills, 
                helping them secure employment opportunities and advance their careers in the ICT sector.
              </p>
              <Link to="/about" className="btn-primary">Learn More</Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/src/assets/about-image.jpg" 
                alt="Women in ICT" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="program-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
              <div className="p-6">
                <div className="text-primary mb-4">
                  <FaLaptopCode size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Digital Skills Training</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive training programs in web development, data science, cybersecurity, and other in-demand tech skills.
                </p>
                <Link to="/programs" className="text-primary font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Program 2 */}
            <div className="program-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
              <div className="p-6">
                <div className="text-secondary mb-4">
                  <FaUsers size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Mentorship Program</h3>
                <p className="text-gray-600 mb-4">
                  Connect with industry professionals who provide guidance, support, and insights to help advance your career.
                </p>
                <Link to="/programs" className="text-primary font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Program 3 */}
            <div className="program-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
              <div className="p-6">
                <div className="text-tertiary mb-4">
                  <FaChartLine size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Career Development</h3>
                <p className="text-gray-600 mb-4">
                  Professional development workshops, job placement services, and career counseling for women in tech.
                </p>
                <Link to="/programs" className="text-primary font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25K+</div>
              <p>Trainees</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>Partner Companies</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p>Job Placement Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p>Years of Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-6">
                "ACWICT's digital skills program transformed my career. I went from being unemployed to working as a frontend developer at a top tech company within 6 months of completing the program."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Jane Doe</h4>
                  <p className="text-gray-600">Frontend Developer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-6">
                "The mentorship I received through ACWICT helped me navigate challenges in my tech career. The guidance and support network I gained has been invaluable to my professional growth."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Mary Smith</h4>
                  <p className="text-gray-600">Data Scientist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {/* Partner logos would go here */}
            <div className="h-16 bg-gray-200 rounded flex items-center justify-center">Partner 1</div>
            <div className="h-16 bg-gray-200 rounded flex items-center justify-center">Partner 2</div>
            <div className="h-16 bg-gray-200 rounded flex items-center justify-center">Partner 3</div>
            <div className="h-16 bg-gray-200 rounded flex items-center justify-center">Partner 4</div>
            <div className="h-16 bg-gray-200 rounded flex items-center justify-center">Partner 5</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to acquire new skills, advance your career, or mentor others,
            ACWICT offers opportunities for growth and impact.
          </p>
          <Link to="/contact" className="btn-secondary">Get Started Today</Link>
        </div>
      </section>
    </div>
  )
}

export default Home