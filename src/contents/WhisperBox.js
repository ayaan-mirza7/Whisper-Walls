import React, { useState } from 'react';

const WhisperBox = ({ whisper, tags }) => {
  const [heartCount, setHeartCount] = useState(0);

  const handleHeartClick = () => {
    setHeartCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{
      backgroundColor: '#1E293B',
      color: '#E2E8F0',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      fontFamily: 'sans-serif',
      width: '350px',
    }}>
      <p style={{ fontSize: '16px', fontWeight: 'normal', lineHeight: '1.5', margin: '0 0 12px 0' }}>
        {whisper}
      </p>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <span style={{ backgroundColor: '#334155', color: '#94A3B8', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
          {tags}
        </span>
        <span style={{ backgroundColor: '#334155', color: '#94A3B8', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
          #stress
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px', color: '#94A3B8' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span onClick={handleHeartClick} style={{ color: '#EF4444', cursor: 'pointer' }}>❤️</span>
            <span>{heartCount}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#94A3B8' }}>💬</span>
            <span>15</span>
          </div>
        </div>
        <span>2 hours ago</span>
      </div>
    </div>
  );
};

export default WhisperBox;