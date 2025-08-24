import React from 'react';

const Repos = () => {
  return (
    <div className="min-h-screen bg-[#ECECEC] dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2C2C54] dark:text-white mb-4">
            Welcome to MarkyMark1000
          </h1>
          <p className="text-xl text-[#2C2C54] dark:text-gray-300 max-w-2xl mx-auto">
            Explore my projects, code repositories, and development journey.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/repos"
            className="inline-flex items-center px-6 py-3 bg-[#474787] dark:bg-primary-500 text-white font-medium rounded-lg hover:bg-[#5a5a9e] dark:hover:bg-primary-600 transition-colors"
          >
            View My Repositories
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Repos;