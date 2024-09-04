import React, { useEffect, useRef } from 'react';

const WebcamFeed = ({ onCapture }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    };

    getVideo();
  }, []);

  // Capture a screenshot from the video feed
  const captureFrame = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;

    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the canvas to a data URL (base64)
      const dataUrl = canvas.toDataURL('image/jpeg', 1.0); // JPEG with maximum quality
      onCapture(dataUrl); // Pass the data URL to the parent component
    }
  };

  return (
    <div className="w-1/2 h-full flex justify-center items-center">
      <video ref={videoRef} autoPlay className="rounded-lg shadow-lg"></video>
      <button onClick={captureFrame} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mt-4">
        Capture Frame
      </button>
    </div>
  );
};

export default WebcamFeed;
