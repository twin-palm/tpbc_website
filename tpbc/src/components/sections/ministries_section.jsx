import React, { useState } from "react";
import { ministry_data } from "../data";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Ministries = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ministry_data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ministry_data.length) % ministry_data.length);
  };

  const currentMinistry = ministry_data[currentSlide];
  return (
    <div className="w-full bg-white py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-center">OUR MINISTRIES</h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={currentMinistry.image}
              alt={currentMinistry.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
          </div>

          <div className="bg-purple-700 text-white p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-3xl font-bold mb-4">{currentMinistry.title}</h3>
            <p className="mb-6 text-sm sm:text-base">{currentMinistry.description}</p>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4">Highlights:</h4>
              <ul className="space-y-3 text-sm sm:text-base">
                {currentMinistry.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 sm:mt-8 gap-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-purple-700 text-white hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Previous slide"
          >
            <FaArrowAltCircleLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-purple-700 text-white hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Next slide"
          >
            <FaArrowCircleRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ministries;
