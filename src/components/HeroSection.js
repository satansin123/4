import React from 'react';

function HeroSection() {
  return (
    <div className="hero-section bg-cover bg-center h-screen relative">
      <div className="hero-overlay flex flex-col items-center justify-center text-center h-full absolute top-0 left-0 right-0 bottom-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hero-text mb-4 text-white">
          Explore the World with Travel
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl hero-text mb-8 text-white">
          Discover the best destinations and experiences with our expert travel guides.
        </p>
        <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
