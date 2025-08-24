import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-[#474787] dark:bg-black shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Title */}
          <Link 
            to="/" 
            className="text-lg sm:text-xl md:text-2xl font-bold text-white dark:text-white hover:text-gray-200 dark:hover:text-gray-200 transition-colors"
          >
            MarkyMark1000
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-2 sm:space-x-4 md:space-x-6">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'bg-[#5a5a9e] dark:bg-gray-800 text-white dark:text-white'
                  : 'text-gray-200 dark:text-gray-300 hover:bg-[#5a5a9e] dark:hover:bg-gray-800 hover:text-white dark:hover:text-primary-400'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/repos"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/repos')
                  ? 'bg-[#5a5a9e] dark:bg-gray-800 text-white dark:text-white'
                  : 'text-gray-200 dark:text-gray-300 hover:bg-[#5a5a9e] dark:hover:bg-gray-800 hover:text-white dark:hover:text-primary-400'
              }`}
            >
              Repos
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
