import logo from './logo.svg';
import './App.css';
import Main_big from './contents/Main_big';
import InfoBox from './contents/InfoBox';
import { use, useState } from 'react';
import Boxes from './contents/Boxes';


function App() {
  const [whisper,setwhisper]=useState('');
  const [tags,settags]=useState('');
  const [info,setinfo]=useState([]);
  const add =(event)=>{
    event.preventDefault();
    if(!whisper){
      alert('Insufficient Information');
    }
    const newinfo={
      tags:tags,
      whisper:whisper,
    }
    setinfo([...info,newinfo]);

    
    settags('')
    setwhisper('')


  }
  
  return (<div>
    <div style={{height:"70px",display:'flex',alignItems:'center',backgroundColor:'lightblue',margin:'20px'}}>
      <div style={{marginLeft:'100px'}}><p>WHISPER WALLS</p></div>
      <div style={{marginLeft:'400px'}}>Home</div>
      <div style={{marginLeft:'200px'}}>Post Whisper</div>
      <div style={{marginLeft:'100px'}}>My Whisper</div>
      <button style={{marginLeft:'100px'}}>Login</button>
      <button style={{marginLeft:'100px'}}>Signup</button>
      </div>
      <Main_big/>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <Boxes info={info} />
      </div>

      <InfoBox whisper={whisper} tags={tags} settags={settags} setwhisper={setwhisper} add={add} info={info} setinfo={setinfo}/>
    </div>
    
    
  );
}


export default App;
