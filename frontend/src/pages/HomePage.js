// src/pages/HomePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import BookingModal from "../components/BookingModal"; // ✅ NEW


const HomePage = () => {
  const navigate = useNavigate();

  // State for showing role selection dropdown
  const [showRoleSelect, setShowRoleSelect] = useState(false);

  // State for location input
  const [location, setLocation] = useState("Chennai");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  


  const categories = [
    { label: "Women's Salon & Spa", img: "/images/salon-women.jpg" },
    {
      label: "Men's Salon & Massage",
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677519626723-82ff21.jpeg",
    },
    {
      label: "AC & Appliance Repair",
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745822870879-984cbd.jpeg",
    },
    {
      label: "Cleaning & Pest Control",
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731504272013-0ef836.jpeg",
    },
    {
      label: "Electrician, Plumber & Carpenter",
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731504274912-f9181e.jpeg",
    },
  ];

  const popular = [
    {
      name: "Bathroom Cleaning",
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745582697138-89345d.jpeg",
    },
    {
      name: "AC Servicing",
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745822870879-984cbd.jpeg",
    },
    {
      name: "Haircut for Men",
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677519626723-82ff21.jpeg",
    },
    {
      name: "Deep Home Cleaning",
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1735893886310-6dbc53.jpeg",
    },
    {
      name: "Fridge Repair",
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_520,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1744660389006-92a5ea.jpeg",
    },
    {
      name: "Pedicure & Manicure",
      img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1669359495410-7d7f81.jpeg",
    },
  ];

  const steps = [
    { step: "1", title: "Search Service", desc: "Find the service you need in seconds" },
    { step: "2", title: "Book Instantly", desc: "Choose a time that works for you" },
    { step: "3", title: "Get It Done", desc: "Professional arrives at your doorstep" },
  ];

  const professionals = [
    { name: "Ravi Kumar", skill: "Electrician", rating: "4.9", img: "https://thf.bing.com/th/id/OIP.TC1fux7foxl9NDjGbZiWUAHaHa?w=139&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3" },
    { name: "Neha Sharma", skill: "Beautician", rating: "4.8", img: "https://thf.bing.com/th/id/OIP.TC1fux7foxl9NDjGbZiWUAHaHa?w=139&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3" },
    { name: "Arun Singh", skill: "Carpenter", rating: "4.7", img: "https://thf.bing.com/th/id/OIP.TC1fux7foxl9NDjGbZiWUAHaHa?w=139&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3" },
  ];

  const offers = [
    { title: "Flat 20% OFF on Salon Services", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1677519632879-a9e740.jpeg" },
    { title: "AC Servicing @ ₹499 only", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745822870879-984cbd.jpeg" },
    { title: "Deep Cleaning Combo Offer", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1735893886310-6dbc53.jpeg" },
  ];

  const blogs = [
    { title: "Top 5 Summer Skincare Tips", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1729772247309-29d7b5.jpeg" },
    { title: "How to Maintain Your AC Efficiently", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745822880066-4db258.jpeg" },
    { title: "Best Pest Control Methods for Homes", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731504277984-7347cb.jpeg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar with signup role select */}
      <Navbar>
        <div className="relative inline-block">
          <button
            onClick={() => setShowRoleSelect(!showRoleSelect)}
            className="px-5 py-2 rounded-lg bg-purple-700 text-white font-semibold shadow-md hover:bg-purple-800 transition"
          >
            Sign Up
          </button>
          {showRoleSelect && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-20">
              <button
                onClick={() => navigate("/register?role=user")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Sign Up as User
              </button>
              <button
                onClick={() => navigate("/register?role=professional")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Sign Up as Professional
              </button>
            </div>
          )}
        </div>
      </Navbar>
 {/* ✅ Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Reliable Home Services at Your Doorstep
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Book trusted professionals for salon, cleaning, appliance repair, and more. Anytime, Anywhere.
            </motion.p>
  
            {/* Search Bar with Location */}
            <div className="mt-10 flex justify-center">
              <motion.div
                className="flex items-center bg-white text-black rounded-full shadow-2xl overflow-hidden w-full md:w-2/3 border-2 border-blue-600"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Search className="ml-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="flex-1 px-4 py-3 outline-none"
                />
                {/* Location Selector */}
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="px-3 py-3 border-l border-gray-300 bg-gray-50 text-gray-700 outline-none"
                >
                  <option value="Chennai">Gunupur</option>
                  <option value="Bangalore">Bhubneswar</option>
                  <option value="Delhi">Cuttack</option>
                  <option value="Mumbai">Bangalore</option>
                </select>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:opacity-90 text-white px-6 py-3 font-semibold">
                  Search
                </button>
              </motion.div>
            </div>
          </div>
        </section>
  
      {/* ✅ Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">What are you looking for?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <img src={cat.img} alt={cat.label} className="w-full h-44 object-cover" />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
                  <span className="text-white text-sm font-bold">{cat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* ✅ Popular Services */}
<section id="services" className="py-20 bg-gray-50">
  <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Popular Services</h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
    {popular.map((service, i) => (
      <motion.div
        key={i}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.15 }}
      >
        <img src={service.img} alt={service.name} className="w-full h-56 object-cover" />
        <div className="p-5">
          <h3 className="font-semibold text-lg">{service.name}</h3>
          <button
            onClick={() => {
              setSelectedService(service.name);
              setIsModalOpen(true);
            }}
            className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 rounded-lg font-semibold hover:opacity-90"
            >
            Book Now
          </button>

        </div>
      </motion.div>
    ))}
  </div>
</section>

{/* Booking Modal */}
<BookingModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  defaultService={selectedService}
/>



      {/* 🎁 Deals & Offers */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Top Deals & Offers</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={offer.img} alt={offer.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{offer.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ UC Promise Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[{ img: "https://thf.bing.com/th/id/OIP.TC1fux7foxl9NDjGbZiWUAHaHa?w=139&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3", title: "Verified Professionals", desc: "Trained & background checked experts" },
            { img: "https://thf.bing.com/th/id/OIP.TC1fux7foxl9NDjGbZiWUAHaHa?w=139&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3", title: "UC Guarantee", desc: "Insurance protection against damages" },
            { img: "https://thf.bing.com/th/id/OIP.TC1fux7foxl9NDjGbZiWUAHaHa?w=139&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3", title: "Top Rated Service", desc: "4.8/5 average customer rating" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={item.img} alt={item.title} className="mx-auto w-14 mb-4" />
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-b from-gray-50 to-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-blue-600 text-5xl font-bold mb-4">{s.step}</div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ Featured Professionals */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Our Top Professionals</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {professionals.map((pro, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={pro.img} alt={pro.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="font-semibold text-lg">{pro.name}</h4>
              <p className="text-gray-600">{pro.skill}</p>
              <p className="text-yellow-500 font-bold mt-2">⭐ {pro.rating}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Testimonials */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">What Our Customers Say</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[{ text: "Great service, punctual and professional!", name: "Priya, Chennai" },
            { text: "UrbanPro makes life so much easier!", name: "Arjun, Chennai" },
            { text: "Affordable and reliable home services.", name: "Kavya, Chennai" },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-gray-600 italic">"{t.text}"</p>
              <h4 className="mt-4 font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📰 Blog Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Latest from Our Blog</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{blog.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🏢 About Section */}
      <section className="py-20 bg-gradient-to-r from-white-800 to-white-400 text-gray-900">
        <div className="max-w-6xl mx-auto text-center space-y-6 px-6">
          <h2 className="text-4xl font-bold">Why Choose Us?</h2>
          <p className="text-black-800 max-w-3xl mx-auto">
            We are committed to bringing you trusted and verified professionals at the best prices.
            With top-rated services and customer-first policies, we make home services stress-free and reliable.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
