import React, { use, useState } from 'react'

const Main_big = () => {
    const [active,setactive]=useState(false);
    const [btn,setbtn]=useState(false);
  return (
    <div>
    <div style={{height:'300px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <p style={{fontSize:'50px'}}>Share your thoughts anonymously,safely,and freely</p>
    </div>
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
        <div>
            <button
      style={{
        height:'30px',
        borderRadius: "10px",
        border: "none",
        backgroundColor: "lightblue",
        color: "white",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "dodgerblue")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "lightblue")}
    >
      Post a Whisper
    </button>
    <button
      style={{
        height:'30px',
        marginLeft:'30px',
        borderRadius: "10px",
        border: "none",
        backgroundColor: "lightblue",
        color: "white",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "dodgerblue")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "lightblue")}
    >
      Explore Whispers
    </button>
        </div>
    </div>
    </div>
  )
}

export default Main_big;
