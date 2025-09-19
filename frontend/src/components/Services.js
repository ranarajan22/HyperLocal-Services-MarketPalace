import React from "react";

const services = [
  {
    title: "Plumbing Services",
    desc: "Leak repairs, pipe installations, faucet fixes",
    price: "Starting at $49",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/58607a2a-1643-49ee-a195-5787d1bf68a6.png",
  },
  {
    title: "Electrical Work",
    desc: "Wiring, installations, panel upgrades",
    price: "Starting at $59",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/04293254-95b8-4c0f-a017-95a1a8abfb52.png",
  },
  {
    title: "Home Cleaning",
    desc: "Deep cleaning, regular maintenance",
    price: "Starting at $29/hr",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3178c85d-450b-48e1-9f1e-4768c2f90e02.png",
  },
  {
    title: "AC Repair",
    desc: "Maintenance, installation, repairs",
    price: "Starting at $79",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f9c0d8e4-7d9c-4895-84c5-7453b467dcdc.png",
  },
];

export default function Services({ onBook }) {
  return (
    <section id="services" className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => onBook(service.title)}
            >
              <div className="h-40 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                <span className="text-purple-700 font-medium">{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border-2 border-purple-700 text-purple-700 px-6 py-2 rounded-md hover:bg-purple-50 transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
