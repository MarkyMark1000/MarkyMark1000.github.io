import React from 'react';

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-[#474787] dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.3)] dark:shadow-[4px_4px_8px_rgba(156,163,175,0.2)] p-6 hover:shadow-[6px_6px_12px_rgba(0,0,0,0.4)] dark:hover:shadow-[6px_6px_12px_rgba(156,163,175,0.3)] transition-shadow">
      <div className="text-white dark:text-primary-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-200 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default Card;
