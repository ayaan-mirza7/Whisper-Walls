import React from 'react';
import './InfoBox.css';

const InfoBox = ({ whisper, tags, settags, setwhisper, add }) => {
  return (
    <div className="infobox-container">
      <form onSubmit={add}>
        <p>What's on Your Mind?</p>
        <textarea
          placeholder='Whats on your mind ?'
          value={whisper}
          onChange={(e) => setwhisper(e.target.value)}
        ></textarea>
        <input
          type='text'
          placeholder='Add tags(optional)'
          value={tags}
          onChange={(e) => settags(e.target.value)}
        />
        <input className='submit'
          type='submit'
          value='POST'
        />
      </form>
    </div>
  );
};

export default InfoBox;