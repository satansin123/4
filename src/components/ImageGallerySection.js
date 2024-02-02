import React from 'react';

function ImageGallerySection({ sectionRef }) {
  return (
    <div className="bg-white py-10" ref={sectionRef}>
      <div className="container mx-full px-5">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          EXPLORE THE WORLD THROUGH TRAVEL'S EYES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ml-10">
          {/* Row 1 */}
          <div className="mb-4">
            <img
              className=" rounded-lg"
              src="https://placehold.co/300x300?text=Mountain+Valley+Placeholder"
              alt="Mountain valley placeholder image"
            />
          </div>
          <div className="mb-4">
            <img
              className=" rounded-lg"
              src="https://placehold.co/300x300?text=Airport+Silhouette+Placeholder"
              alt="Airport silhouette placeholder image"
            />
          </div>
          <div className="mb-4">
            <img
              className=" rounded-lg"
              src="https://placehold.co/300x300?text=Beach+Dinner+Placeholder"
              alt="Beach dinner placeholder image"
            />
          </div>
          {/* Row 2 */}
          <div className="mb-4">
            <img
              className=" rounded-lg"
              src="https://placehold.co/300x300?text=RV+Campsite+Placeholder"
              alt="RV campsite placeholder image"
            />
          </div>
          <div className="mb-4">
            <img
              className=" rounded-lg"
              src="https://placehold.co/300x300?text=Desert+Landscape+Placeholder"
              alt="Desert landscape placeholder image"
            />
          </div>
          <div className="mb-4">
            <img
              className=" rounded-lg"
              src="https://placehold.co/300x300?text=Rice+Terraces+Placeholder"
              alt="Rice terraces placeholder image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallerySection;
