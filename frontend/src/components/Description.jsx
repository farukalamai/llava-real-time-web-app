import React, { useState, useEffect } from 'react';

const Description = ({ description }) => {
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 50; // Speed of typing (milliseconds)

  useEffect(() => {
    if (description) {
      setDisplayedText(''); // Clear the displayed text before typing the new description
      let currentIndex = -1;

      const typingInterval = setInterval(() => {
        // Check if currentIndex is within bounds
        if (currentIndex < description.length - 1) {
          setDisplayedText((prev) => prev + description[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval); // Clear interval once all text is displayed
        }
      }, typingSpeed);

      // Cleanup interval if description changes or component unmounts
      return () => clearInterval(typingInterval);
    } else {
      setDisplayedText(''); // Reset if no description is provided
    }
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
