
import React from 'react';
import WhisperBox from './WhisperBox'; 

const Boxes = ({ info }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '50px',
    }}>
      {info.map((item, index) => (
        <WhisperBox
          key={index}
          whisper={item.whisper}
          tags={item.tags}
        />
      ))}
    </div>
  );
};

export default Boxes;