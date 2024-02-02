import React, { useEffect } from 'react';

function ContactSection({ sectionRef }) {
  useEffect(() => {
    console.log('ContactSection mounted. Ref:', sectionRef);
  }, []);

  return (
    <div className="bg-white py-10" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Contact Us</h2>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">We'd love to hear from you!</h3>
            <p className="text-gray-600 ">
              Have a question about our services? 
            </p>
            <p className="text-gray-600 mb-4 ">
            Want to see if your particular vacation is one we can help with?  
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 ">
              <i className="fab fa-whatsapp mr-2" />
              Message us on WhatsApp
            </button>
            <div className="mt-8 text-gray-600">
              <h4 className="text-xl font-semibold mb-2">Travel</h4>
              <p>Hours</p>
              <p>Open today 09:00 am – 05:00 pm</p>
            </div>
          </div>
          {/* Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              className="rounded-lg shadow-md"
              src="https://placehold.co/500x300?text=Rice+Terraces+Placeholder"
              alt="Rice terraces"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
