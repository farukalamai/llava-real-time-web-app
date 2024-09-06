import React, { useState, useEffect } from 'react';

const Description = ({ description }) => {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 50; // Speed of typing (milliseconds)

  useEffect(() => {
    if (!description) return;

    setDisplayedText(''); // Reset displayed text
    let currentIndex = -1;

    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => (prev !== 'undefined' ? prev : '') + description[currentIndex-1])
      
      currentIndex++;

      // Clear interval when done
      if (currentIndex === description.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    // Cleanup on unmount or description change
    return () => clearInterval(typingInterval);
  }, [description, typingSpeed]);

  return (
    <div className="w-1/2 h-full p-4 flex justify-center items-center bg-white rounded-lg shadow-lg">
      <p className="text-lg text-gray-800">
        {displayedText || 'Waiting for description...'}
      </p>
    </div>
  );
};

export default Description;
