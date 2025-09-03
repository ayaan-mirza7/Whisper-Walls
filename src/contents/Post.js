import React from 'react';
import './Post-container.css';   
import { useLocation, useNavigate } from 'react-router-dom';

const Post = ({ whisper, setwhisper, tags, settags, add }) => {
  const navigate=useNavigate();
  const handelsubmit=(e)=>{
    e.preventDefault();
    add(e);
    navigate('/');

  }
  return (
    <div className="postbox-container">  
      <form onSubmit={handelsubmit}>
        <p>What's on Your Mind?</p>
        <textarea
          placeholder="What's on your mind ?"
          value={whisper}
          onChange={(e) => setwhisper(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Add tags (optional)"
          value={tags}
          onChange={(e) => settags(e.target.value)}
        />
        <input
          className="submit"
          type="submit"
          value="POST" 
        />
      </form>
    </div>
  );
};

export default Post;
