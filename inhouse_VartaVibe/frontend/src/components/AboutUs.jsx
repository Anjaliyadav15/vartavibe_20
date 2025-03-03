import React from 'react';

export const AboutUs = () => {
  return (
    <div id="about" className="about-section">
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[500px] py-10 lg:py-20 px-4 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-12">
        {/* Image Section */}
        <div className="lg:w-1/3 flex justify-center">
          <img
            src="https://c8.alamy.com/comp/AK2563/the-new-york-times-newspaper-vertical-AK2563.jpg"
            alt="Newspaper with Pen"
            className="w-auto h-[450px] object-cover rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3 relative h-[450px] flex items-center">
          {/* Darker Visible Box */}
          <div className="absolute inset-0 bg-black/20 rounded-lg -z-10"></div>

          {/* Content */}
          <div className="p-8 lg:p-12 text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-orange-500 mb-4">
              About Us
            </h3>
            <div className="w-20 h-[3px] bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
              Discover a new way to stay updated with our dynamic news platform. We bring you personalized news content in your preferred language and tailored to your selected state, ensuring you never miss an update that matters to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
