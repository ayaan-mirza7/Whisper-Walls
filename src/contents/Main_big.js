import React, { useState } from 'react';

const Main_big = () => {
  // Use a state variable to track the active button
  const [activeButton, setActiveButton] = useState('post');

  // This function sets the state to the ID of the clicked button
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="main-content">
      <h1 className="main-title">Share your thoughts anonymously, safely, and freely</h1>
      <div className="main-buttons">
        <button
          className={`main-btn ${activeButton === 'post' ? 'active-btn' : ''}`}
          onClick={() => handleButtonClick('post')}
        >
          Post a Whisper
        </button>
        <button
          className={`main-btn explore-btn ${activeButton === 'explore' ? 'active-btn' : ''}`}
          onClick={() => handleButtonClick('explore')}
        >
          Explore Whispers
        </button>
      </div>
    </div>
  );
};

export default Main_big;