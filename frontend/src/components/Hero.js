import React from "react";

export default function Hero() {
  return (
    <div className="relative h-96 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/55116322-a435-4bd6-8750-2018d1f86fc7.png"
          alt="Technician"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Home Services, On Demand
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Book trusted professionals for all your home service needs at your convenience
        </p>

        <div className="bg-white rounded-lg p-2 shadow-lg max-w-3xl">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="What service do you need?"
              className="flex-grow p-3 outline-none text-gray-700"
            />
            <button className="bg-purple-800 px-6 py-3 rounded-md ml-2 text-white">
              <i className="fas fa-search mr-2"></i> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
