import React, { useEffect, useState } from 'react';

const CardRepo = ({ image, title, description, link, delay = 0 }) => {
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
      className={`relative bg-[#474787] dark:bg-gray-800 border-2 border-[#ECECEC] dark:border-gray-600 rounded-lg shadow-[4px_4px_8px_rgba(71,71,135,0.3)] dark:shadow-[4px_4px_8px_rgba(156,163,175,0.2)] overflow-hidden hover:shadow-[6px_6px_12px_rgba(71,71,135,0.4)] dark:hover:shadow-[6px_6px_12px_rgba(156,163,175,0.3)] transition-all duration-1000 ease-out aspect-[2/1] ${
        isVisible
          ? 'opacity-100 transform translate-y-0'
          : 'opacity-0 transform translate-y-8'
      }`}
    >
      {/* Background Image - Left Half */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          maskImage:
            'linear-gradient(to right, black 0%, black 45%, transparent 55%)',
          WebkitMaskImage:
            'linear-gradient(to right, black 0%, black 45%, transparent 55%)',
        }}
      />

      {/* Gradient Overlay for blending */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, transparent 45%, rgba(71,71,135,0.8) 50%, rgba(71,71,135,1) 55%, rgba(71,71,135,1) 100%)',
        }}
      />

      {/* Dark mode gradient overlay */}
      <div
        className="absolute inset-0 dark:block hidden"
        style={{
          background:
            'linear-gradient(to right, transparent 0%, transparent 45%, rgba(31,41,55,0.8) 50%, rgba(31,41,55,1) 55%, rgba(31,41,55,1) 100%)',
        }}
      />

      {/* Content - Right Half */}
      <div className="relative z-10 h-full flex">
        {/* Left spacer */}
        <div className="w-1/2" />

        {/* Right content */}
        <div className="w-1/2 p-4 lg:p-6 flex flex-col justify-center">
          <h3 className="text-sm lg:text-xl font-semibold text-white dark:text-white mb-2 lg:mb-3">
            {title}
          </h3>
          <p className="text-gray-200 dark:text-gray-300 text-xs lg:text-sm mb-3 lg:mb-4 leading-tight lg:leading-normal">
            {description}
          </p>
          {link && (
            <div className="text-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-200 hover:text-blue-100 transition-colors text-xs lg:text-sm"
              >
                View Repository
                <svg
                  className="ml-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardRepo;
