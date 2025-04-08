import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-6 py-16 ">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-orange-500 boldo mb-4">About Us</h1>
        <p className="text-xl text-gray-700 mt-4">Your trusted partner in global import and export solutions</p>
      </section>

      {/* Company History Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-black boldo mb-4">Our History</h2>
        <p className="text-lg text-gray-700 mb-6">
          Established in [Year], [Company Name] has grown into a leading name in the import and export industry. With decades of expertise, we specialize in providing reliable, fast, and cost-effective shipping solutions across the globe.
        </p>
        <p className="text-lg text-gray-700">
          Our mission is to simplify global trade and connect businesses to international markets, ensuring safe and timely deliveries through our robust network of logistics partners.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-black boldo mb-8">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="service-card bg-gradient-to-r from-orange-400 to-orange-600 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold  text-white mb-4">Import Services</h3>
            <p className="text-white">
              We offer comprehensive import solutions, handling everything from customs clearance to doorstep delivery. Our experienced team ensures that all goods are delivered on time and within budget, meeting all local regulations.
            </p>
          </div>
          <div className="service-card bg-gradient-to-r from-orange-400 to-orange-600 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Export Services</h3>
            <p className="text-white">
              Our export services help businesses expand globally. From packaging and labeling to international shipping, we ensure your goods reach their destination in perfect condition, on time, and with competitive rates.
            </p>
          </div>
          <div className="service-card bg-gradient-to-r from-orange-400 to-orange-600 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Logistics and Freight</h3>
            <p className="text-white">
              We offer a variety of freight options, including air, sea, and land transport. Whether you're shipping small parcels or large shipments, we ensure smooth logistics coordination for efficient delivery worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-black boldo mb-6">Our Values</h2>
        <ul className="space-y-6 text-lg text-gray-700">
          <li className="flex items-center">
            <span className="mr-4 text-orange-500 text-2xl">✔</span>
            <span><strong>Integrity:</strong> We uphold the highest standards of integrity, ensuring transparency and reliability in every transaction.</span>
          </li>
          <li className="flex items-center">
            <span className="mr-4 text-orange-500 text-2xl">✔</span>
            <span><strong>Customer-Centric:</strong> We are committed to providing personalized solutions, ensuring customer satisfaction every step of the way.</span>
          </li>
          <li className="flex items-center">
            <span className="mr-4 text-orange-500 text-2xl">✔</span>
            <span><strong>Efficiency:</strong> Time is money. Our streamlined processes are designed to deliver prompt and efficient service without compromising quality.</span>
          </li>
          <li className="flex items-center">
            <span className="mr-4 text-orange-500 text-2xl">✔</span>
            <span><strong>Sustainability:</strong> We are committed to sustainable shipping practices that minimize our environmental impact.</span>
          </li>
        </ul>
      </section>

      {/* Meet the Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold boldo text-black mb-6">Meet Our Team</h2>
        <p className="text-lg text-gray-700 mb-8">Our dedicated team of professionals is the backbone of our success. With years of experience in the shipping and logistics industry, we are committed to providing you with the best service possible.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="team-member text-center">
            <img className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg" src="https://via.placeholder.com/150" alt="John Doe" />
            <h3 className="text-xl font-semibold text-black mb-2">John Doe</h3>
            <p className="text-gray-700"><strong>CEO</strong> - With over 20 years in the industry, John leads our team with a focus on customer satisfaction and business growth.</p>
          </div>
          <div className="team-member text-center">
            <img className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg" src="https://via.placeholder.com/150" alt="Jane Smith" />
            <h3 className="text-xl font-semibold text-black mb-2">Jane Smith</h3>
            <p className="text-gray-700"><strong>Operations Manager</strong> - Jane ensures that every shipment is tracked and delivered on time, maintaining operational efficiency.</p>
          </div>
          <div className="team-member text-center">
            <img className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg" src="https://via.placeholder.com/150" alt="Robert Brown" />
            <h3 className="text-xl font-semibold text-black mb-2">Robert Brown</h3>
            <p className="text-gray-700"><strong>Logistics Specialist</strong> - Robert oversees logistics, ensuring smooth coordination for both local and international shipments.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
