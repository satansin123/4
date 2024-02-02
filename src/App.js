import React, { useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ImageGallerySection from './components/ImageGallerySection';
import ContactSection from './components/ContactSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/FooterSection';
import CarouselSection from './components/CarouselSection';

const testimonialData = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "John Doe",
    position: "CEO, Travel Company",
    avatar: "https://placekitten.com/100/100", // Replace with actual avatar URL
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "John Doe",
    position: "CEO, Travel Company",
    avatar: "https://placekitten.com/100/100", // Replace with actual avatar URL
  },
  // Add more testimonials as needed
];

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const aboutSectionRef = useRef(null);
  const imageGallerySectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const testimonialSectionRef = useRef(null);

  

  const handleButtonClick = (sectionRef) => {
    switch (sectionRef) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'about':
        window.scrollTo({ top: aboutSectionRef.current.offsetTop, behavior: 'smooth' });
        break;
      case 'images':
        window.scrollTo({ top: imageGallerySectionRef.current.offsetTop, behavior: 'smooth' });
        break;
      case 'testimonials':
        window.scrollTo({ top: testimonialSectionRef.current.offsetTop, behavior: 'smooth' });
        break;
      case 'contact':
        window.scrollTo({ top: contactSectionRef.current.offsetTop, behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className="flex">
      {sidebarVisible && (
        <Sidebar handleButtonClick={handleButtonClick} toggleSidebar={toggleSidebar} />
      )}
      <div className={`container-main flex-1 items-center justify-center text-center ${sidebarVisible ? 'ml-64' : 'ml-0 mr-0'}`}>
        <HeroSection />
        <AboutSection sectionRef={aboutSectionRef} />
        <ImageGallerySection sectionRef={imageGallerySectionRef} />
        <TestimonialSection testimonials={testimonialData} sectionRef={testimonialSectionRef} />
        <ContactSection sectionRef={contactSectionRef} />
        <CarouselSection />
        <Footer />
      </div>
      
    </div>
  );
}
export default App;
