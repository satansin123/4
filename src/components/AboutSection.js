import React, { useEffect } from 'react';

function AboutSection({ sectionRef }) {
  useEffect(() => {
    console.log('AboutSection mounted. Ref:', sectionRef);
  }, []); // Empty dependency array ensures the effect runs once after mount

  return (
    <div className="bg-gray-100 py-10" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-semibold text-center text-gray-800 mb-8">
          ABOUT TRAVEL
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Content cards here */}
          {/* Card 1 */}
          <div className="w-full flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 transition-transform transform hover:scale-105">
              <img
                className="rounded-lg mb-4 w-full h-48 object-cover"
                src="https://placehold.co/300x200?text=Mountain+Lake+Scenery+Placeholder"
                alt="Mountain lake scenery placeholder for Our Story section"
              />
              <h3 className="text-xl lg:text-2xl text-gray-800 font-semibold mb-3">Our Story</h3>
              <p className="text-gray-600">
                We started travel with a simple goal: to help people explore the
                world. Our team of experienced travel experts work tirelessly to craft
                unique and unforgettable experiences for our clients.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full ">
            <div className="bg-white rounded-lg p-6 transition-transform transform hover:scale-105">
              <img
                className="rounded-lg mb-4 w-full h-48 object-cover"
                src="https://placehold.co/300x200?text=Mountain+Lake+Scenery+Placeholder"
                alt="Mountain lake scenery placeholder for Our Story section"
              />
              <h3 className="text-xl lg:text-2xl text-gray-800 font-semibold mb-3">Our Story</h3>
              <p className="text-gray-600">
                We started travel with a simple goal: to help people explore the
                world. Our team of experienced travel experts work tirelessly to craft
                unique and unforgettable experiences for our clients.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full ">
            <div className="bg-white rounded-lg p-6 transition-transform transform hover:scale-105">
              <img
                className="rounded-lg mb-4 w-full h-48 object-cover"
                src="https://placehold.co/300x200?text=Map+and+Compass+Placeholder"
                alt="Map and compass placeholder for Our Destinations section"
              />
              <h3 className="text-xl lg:text-2xl text-gray-800 font-semibold mb-3">
                Our Destinations
              </h3>
              <p className="text-gray-600">
                With travel, you can travel to some of the most exotic and
                breathtaking destinations on the planet. Whether you want to explore
                ancient ruins or soak up the sun on a tropical beach, we have a
                destination that's perfect for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
