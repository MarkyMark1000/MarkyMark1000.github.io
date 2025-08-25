import React, { useEffect, useState } from 'react';

const PageSubTitle = ({ subtitle }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts with a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center mb-12">
      <p 
        className={`text-xl text-[#2C2C54] dark:text-gray-300 max-w-2xl mx-auto transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default PageSubTitle;
