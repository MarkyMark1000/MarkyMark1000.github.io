import React, { useEffect, useState } from 'react';

const ViewMyRepos = ({ delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation with custom delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800 + delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`text-center mt-12 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-8'
      }`}
    >
      <a
        href="https://github.com/MarkyMark1000?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-[#5a5a9e] dark:bg-gray-700 text-white font-medium rounded-lg border border-[#ECECEC] dark:border-gray-600 shadow-[2px_2px_4px_rgba(90,90,158,0.3)] dark:shadow-[2px_2px_4px_rgba(156,163,175,0.2)] hover:bg-[#6b6bb3] dark:hover:bg-gray-600 hover:shadow-[3px_3px_6px_rgba(90,90,158,0.4)] dark:hover:shadow-[3px_3px_6px_rgba(156,163,175,0.3)] transition-all"
      >
        View My Repositories
        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
        </svg>
      </a>
    </div>
  );
};

export default ViewMyRepos;
