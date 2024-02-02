import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faImage, faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ handleButtonClick, toggleSidebar }) {
  return (
    <div className="sidebar fixed inset-y-0 left-0 w-64 flex flex-col bg-gray-900 shadow-lg">
      {/* Close button */}
      <button
        className="close-button mt-4 ml-4 flex items-center text-white focus:outline-none"
        onClick={toggleSidebar}
      >
        
      </button>
      {/* Logo and nav */}
      <div className="px-8 py-4">
        <div className="text-white text-4xl font-extrabold mb-6">Travel</div>
        <nav className="flex flex-col">
          <button
            className="nav-button mb-4 flex items-center focus:outline-none"
            onClick={() => handleButtonClick('home')}
          >
            <FontAwesomeIcon icon={faHome} className="mr-3 text-white" />
            Home
          </button>
          <button
            className="nav-button mb-4 flex items-center focus:outline-none"
            onClick={() => handleButtonClick('about')}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-3 text-white" />
            About Us
          </button>
          <button
            className="nav-button mb-4 flex items-center focus:outline-none"
            onClick={() => handleButtonClick('images')}
          >
            <FontAwesomeIcon icon={faImage} className="mr-3 text-white" />
            Images
          </button>
          <button
            className="nav-button mb-4 flex items-center focus:outline-none"
            onClick={() => handleButtonClick('testimonials')}
          >
            <FontAwesomeIcon icon={faComments} className="mr-3 text-white" />
            Testimonials
          </button>
          <button
            className="nav-button mb-4 flex items-center focus:outline-none"
            onClick={() => handleButtonClick('contact')}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-white" />
            Contact Us
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
