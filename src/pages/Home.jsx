import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="min-h-screen bg-indigo-50 dark:bg-black">
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

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* About Card */}
          <Card
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            }
            title="About Me"
            description="Passionate developer creating innovative solutions and sharing knowledge through code."
          />

          {/* Projects Card */}
          <Card
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            }
            title="Projects"
            description="Discover my latest projects and contributions to the development community."
          />

          {/* Skills Card */}
          <Card
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9,5V9H15V5H9M9,19H15V15H9V19M9,14H15V10H9V14M4,9V5H8V9H4M4,19H8V15H4V19M4,14H8V10H4V14M16,5V9H20V5H16M16,19H20V15H16V19M16,14H20V10H16V14Z"/>
              </svg>
            }
            title="Skills"
            description="Full-stack development with modern technologies and best practices."
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/repos"
            className="inline-flex items-center px-6 py-3 bg-[#5a5a9e] dark:bg-gray-700 text-white font-medium rounded-lg border border-[#ECECEC] dark:border-gray-600 shadow-[2px_2px_4px_rgba(90,90,158,0.3)] dark:shadow-[2px_2px_4px_rgba(156,163,175,0.2)] hover:bg-[#6b6bb3] dark:hover:bg-gray-600 hover:shadow-[3px_3px_6px_rgba(90,90,158,0.4)] dark:hover:shadow-[3px_3px_6px_rgba(156,163,175,0.3)] transition-all"
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

export default Home;
