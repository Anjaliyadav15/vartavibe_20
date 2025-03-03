import React from 'react';

export const Services = () => {
  return (
    <div
      id="services"
      className="relative mt-20 min-h-[700px] px-4 lg:px-20 text-center"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-orange-500 mb-4">
        Services
      </h2>
      {/* Orange Line Below Heading */}
      <div className="w-20 h-[3px] bg-orange-500 mx-auto mb-10"></div>

      {/* Services List */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
        {/* Service 1 */}
        <div className="group lg:w-1/3 flex flex-col items-center bg-transparent border border-gray-500 rounded-lg p-4 lg:p-6 hover:border-orange-500 hover:scale-105 transition-all transform">
          {/* Image Section */}
          <div className="w-full h-[200px] bg-gray-700 rounded-t-lg mb-4">
            {/* Placeholder for Image */}
            <img
              src="https://www-static-blogs.operacdn.com/news/wp-content/uploads/sites/2/2016/08/sf-personalnews-baner.jpg"
              alt="Personalized News"
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          {/* Content Section */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
              Personalized News
            </h3>
            <p className="text-gray-300 text-sm lg:text-base">
              Get news content as per your
              preferences and interest for a customized reading experience.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="group lg:w-1/3 flex flex-col items-center bg-transparent border border-gray-500 rounded-lg p-4 lg:p-6 hover:border-orange-500 hover:scale-105 transition-all transform">
          {/* Image Section */}
          <div className="w-full h-[200px] bg-gray-700 rounded-t-lg mb-4">
            {/* Placeholder for Image */}
            <img
              src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/location-based-reminder-apps-feature-image.jpg"
              alt="Location-Based Updates"
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          {/* Content Section */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
              Location-Based Updates
            </h3>
            <p className="text-gray-300 text-sm lg:text-base">
              Stay updated with news from your selected state for relevant and
              region-specific information.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="group lg:w-1/3 flex flex-col items-center bg-transparent border border-gray-500 rounded-lg p-4 lg:p-6 hover:border-orange-500 hover:scale-105 transition-all transform">
          {/* Image Section */}
          <div className="w-full h-[200px] bg-gray-700 rounded-t-lg mb-4">
            {/* Placeholder for Image */}
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.KNEeMj6AVeBHcWfqZwSuwwHaJB&pid=Api&P=0&h=220"
              alt="Real-Time Notifications"
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          {/* Content Section */}
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
            News in Your Preferred Language
            </h3>
            <p className="text-gray-300 text-sm lg:text-base">
              Receive news in language as per your preference 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
