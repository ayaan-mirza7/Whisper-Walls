import React, { useState } from 'react';
import './App.css'; // Import the new stylesheet
import Main_big from './contents/Main_big';
import InfoBox from './contents/InfoBox';
import Boxes from './contents/Boxes';
import { Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './Home';
import Post from './contents/Post';
import Login from './contents/Login';
import Signup from './contents/signup';

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
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Home
         whisper={whisper}
            setwhisper={setwhisper}
            tags={tags}
            settags={settags}
            info={info}
            setinfo={setinfo}
            add={add}
      />
      }/>
      <Route path='post' element={<Post
      whisper={whisper}
            setwhisper={setwhisper}
            tags={tags}
            settags={settags}
            info={info}
            setinfo={setinfo}
            add={add}/>
      }/>
      
      
    
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        
        </>
      
    ))

  return (
    
      <RouterProvider router={router}/>
    
  );
} 

export default App;