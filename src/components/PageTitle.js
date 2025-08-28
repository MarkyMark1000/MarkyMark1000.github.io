import React, { useEffect, useState } from 'react';

const PageTitle = ({ title }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center mb-12">
      <h1
        className={`text-4xl md:text-6xl font-bold text-[#2C2C54] dark:text-white mb-4 transition-all duration-[1600ms] ease-out origin-center ${
          isVisible
            ? 'opacity-100 transform scale-y-100'
            : 'opacity-0 transform scale-y-0'
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
