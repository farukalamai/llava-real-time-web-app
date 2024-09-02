import React, { useState } from 'react';
import WebcamFeed from './components/WebcamFeed';
import Description from './components/Description';

const App = () => {
  const [description, setDescription] = useState('');

  return (
    <div className="h-screen flex">
      <WebcamFeed />
      <Description description={description} />
    </div>
  );
};

export default App;
