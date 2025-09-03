import React, { useState } from 'react';
import './App.css'; // Import the new stylesheet
import Main_big from './contents/Main_big';
import InfoBox from './contents/InfoBox';
import Boxes from './contents/Boxes';
import Routes, { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Home = ({whisper,setinfo,settags,setwhisper,tags,info,add}) => {
    
    
      
      const navigate=useNavigate();
  return (
    <div>
      <div className="navbar">
              <div className="navbar-logo">WHISPER WALLS</div>
              <div className="navbar-links">
                
                <Link to={"/"}  className="navbar-link">Home</Link>

                <Link to={"post"}
          
                 className="navbar-link">Post Whisper</Link>

                <Link to={"/"} className="navbar-link">My Whisper</Link>
                
              </div>
              <div className="navbar-auth">
                <Link to={"login"}> 
                <button className="auth-button" >Login</button>
            
                </Link>
              
                <Link to={"sign-up"}>
                <button className="auth-button" >Signup</button>
                </Link>
                
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
  )
}

export default Home
