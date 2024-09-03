import React, { useEffect, useRef } from 'react';

const WebcamFeed = () => {
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

  return (
    <div className="w-full h-full flex justify-center items-center">
      <video ref={videoRef} autoPlay className="rounded-lg shadow-lg"></video>
    </div>
  );
};

export default WebcamFeed;
