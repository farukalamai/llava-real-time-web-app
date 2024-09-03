import React, { useState } from 'react';
import WebcamFeed from './components/WebcamFeed';
import Description from './components/Description';

const App = () => {
  const [description, setDescription] = useState('');
  const [isWebcamActive, setIsWebcamActive] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="w-full p-4 bg-purple-700 text-white text-center text-2xl font-bold">
        LLaVA Real-Time Video Processing
      </header>

      {/* Main Content */}
      <div className="flex flex-grow">
        {isWebcamActive ? (
          <WebcamFeed />
        ) : (
          <div className="w-1/2 h-full flex justify-center items-center">
            <p className="text-lg text-gray-800">Webcam is off. Click "Start Webcam" to begin.</p>
          </div>
        )}
        <Description description={description} />
      </div>

      {/* Button to Start Webcam */}
      <div className="w-full p-4 flex justify-center bg-white shadow-lg">
        <button
          onClick={() => setIsWebcamActive(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Start Webcam
        </button>
      </div>
    </div>
  );
};

export default App;
