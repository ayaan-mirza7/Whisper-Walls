import React, { useState } from 'react';
import './App.css'; // Import the new stylesheet
import Main_big from './contents/Main_big';
import InfoBox from './contents/InfoBox';
import Boxes from './contents/Boxes';

function App() {
  const [whisper, setwhisper] = useState('');
  const [tags, settags] = useState('');
  const [info, setinfo] = useState([]);

  const add = (event) => {
    event.preventDefault();
    if (!whisper) {
      alert('Insufficient Information');
      return;
    }
    const newinfo = {
      tags: tags,
      whisper: whisper,
    };
    setinfo(prev => [...prev, newinfo]);
    settags('');
    setwhisper('');
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">WHISPER WALLS</div>
        <div className="navbar-links">
          <a href="#" className="navbar-link">Home</a>
          <a href="#" className="navbar-link">Post Whisper</a>
          <a href="#" className="navbar-link">My Whisper</a>
        </div>
        <div className="navbar-auth">
          <button className="auth-button">Login</button>
          <button className="auth-button">Signup</button>
        </div>
      </div>
      
      <Main_big/>
      
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <Boxes info={info} />
      </div>

      <InfoBox 
        whisper={whisper} 
        tags={tags} 
        settags={settags} 
        setwhisper={setwhisper} 
        add={add} 
      />
      
      <div className="footer">
        © 2025 Whisper Walls. Made with ❤️ at a Hackathon.
      </div>
    </div>
  );
}

export default App;