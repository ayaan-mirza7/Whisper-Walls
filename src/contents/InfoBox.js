import React from 'react'

const InfoBox = ({whisper,tags,settags,setwhisper,add,info}) => {
  
  return (
    <div style={{
  height: '250px',
  width: '250px',
  position: 'fixed', 
  right: '20px',
  bottom: '20px',
  border: '1px solid black', 
  padding: '10px',
  backgroundColor: 'white', 
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
}}>
  <form onSubmit={add}>
    <p style={{ marginLeft: '3px', fontSize: '14px' }}>What's on Your Mind?</p>
    <textarea 
      placeholder='Whats on your mind ?'
      value={whisper} 
      onChange={(e) => setwhisper(e.target.value)}
      style={{
        height:'70px',
        width:'100%',
        borderRadius: '5px',
        resize: 'none', 
        padding: '5px',
        boxSizing: 'border-box' 
      }}>
    </textarea>
    <input 
      type='text' 
      placeholder='Add tags(optional)' 
      value={tags} 
      onChange={(e) => settags(e.target.value)}
      style={{
        height: '20px',
        width: '100%',
        borderRadius: '5px',
        marginTop: '10px',
        padding: '5px',
        boxSizing: 'border-box'
      }}
    />
    <input 
      type='submit' 
      value='POST' 
      style={{
        height: '25px',
        width: '75px',
        marginLeft: '80px',
        marginTop: '30px',
        borderRadius: '5px'
      }}
    />
  </form>
</div>
  )
}

export default InfoBox
