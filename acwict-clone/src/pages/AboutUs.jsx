import { FaCheckCircle, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa'

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl">
            Learn about our mission, vision, and the impact we're making in bridging the gender gap in technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                To promote women's access to and knowledge of information and communication technologies, 
                and to support the use of ICTs as tools to advance women's social and economic empowerment.
              </p>
              <p className="text-gray-700">
                We are committed to creating opportunities for women and girls to develop relevant skills 
                in a supportive environment, connecting them with mentors, resources, and opportunities to excel in the tech industry.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                A world where women have equal access to technology education and careers, 
                and where technology is used as a powerful tool for gender equality and social change.
              </p>
              <p className="text-gray-700">
                We envision a society where women are active participants and leaders in the digital economy, 
                contributing their unique perspectives and talents to drive innovation and inclusive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FaUsers size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusion</h3>
              <p className="text-gray-600">
                Creating opportunities for all women, regardless of background, education, or economic status.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FaLightbulb size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Fostering creative thinking and innovative approaches to address gender gaps in technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FaHandshake size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Working with partners across sectors to maximize impact and reach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary mb-4 flex justify-center">
                <FaCheckCircle size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Committing to high standards in all our programs and initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Our History</h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-3">Founded in 2007</h3>
              <p className="text-gray-700">
                ACWICT was established by a group of women technologists who recognized the need to increase 
                women's participation in the rapidly growing ICT sector in Africa. Starting with a small training program 
                in Nairobi, the organization has grown to become a leading advocate for women in technology across the region.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-3">Growth and Expansion</h3>
              <p className="text-gray-700">
                Over the years, ACWICT has expanded its reach and impact, establishing partnerships with international 
                organizations, corporations, and government agencies. Our programs have evolved to address the changing 
                needs of the tech industry and the women we serve.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">ACWICT Today</h3>
              <p className="text-gray-700">
                Today, ACWICT continues to lead in providing technology education, career development, and leadership 
                training for women across Africa. With a network of thousands of alumni, partners, and supporters, 
                we are driving change and creating opportunities for women in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bol"></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
                