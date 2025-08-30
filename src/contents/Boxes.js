import React from 'react';

const Boxes = ({ info }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',  // Set to 'row' to arrange items horizontally
      flexWrap: 'wrap',      // Allow items to wrap to the next line
      gap: '20px',           // Add space between the divs
      justifyContent: 'center', // Center the items in the container
      marginTop: '50px',
    }}>
      {info.map((item, index) => (
        <div 
          key={index} 
          style={{
            backgroundColor: '#1E293B',
            color: '#E2E8F0',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            fontFamily: 'sans-serif',
            width: '350px', // A standard width for the card
          }}>
          {/* Your UI for each box */}
          <p style={{ fontSize: '16px', fontWeight: 'normal', lineHeight: '1.5', margin: '0 0 12px 0' }}>
            {item.whisper}
          </p>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <span style={{ backgroundColor: '#334155', color: '#94A3B8', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
              {item.tags}
            </span>
            <span style={{ backgroundColor: '#334155', color: '#94A3B8', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
              #stress
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px', color: '#94A3B8' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ color: '#EF4444' }}>❤️</span>
                <span>23</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ color: '#94A3B8' }}>💬</span>
                <span>15</span>
              </div>
            </div>
            <span>2 hours ago</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Boxes;