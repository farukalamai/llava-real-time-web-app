import React from 'react';

const Description = ({ description }) => {
  return (
    <div className="w-1/2 h-full p-4 flex justify-center items-center bg-white rounded-lg shadow-lg">
      <p className="text-lg text-gray-800">{description || 'Waiting for description...'}</p>
    </div>
  );
};

export default Description;
