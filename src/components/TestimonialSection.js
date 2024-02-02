import React from 'react';

function TestimonialSection({ testimonials, sectionRef }) {
  return (
    <div className="bg-gray-100 py-10" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Testimonials
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg p-6 transition-transform transform hover:scale-105">
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    className="rounded-full h-12 w-12 object-cover mr-4"
                    src={testimonial.avatar}
                    alt={`Avatar ${index + 1}`}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
