// src/pages/About.js
import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            We’re on a mission to make home services accessible, reliable, and
            affordable for everyone.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Who We Are
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To connect customers with trusted professionals for all their
              home service needs—quickly and conveniently.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the most reliable and preferred platform for home services
              in every city.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Our Values
            </h3>
            <p className="text-gray-600">
              Customer-first approach, transparency, trust, and empowering local
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src="https://thf.bing.com/th/id/OIP.TC1fux7foxl9NDjGbZiWUAHaHa?w=139&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Rajan Kumar Rana</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src="https://thf.bing.com/th/id/OIP.TC1fux7foxl9NDjGbZiWUAHaHa?w=139&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Debesh Kumar Behera</h3>
              <p className="text-gray-500">Head of Operations</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src="https://thf.bing.com/th/id/OIP.TC1fux7foxl9NDjGbZiWUAHaHa?w=139&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Anisha Minz</h3>
              <p className="text-gray-500">Tech Lead</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
