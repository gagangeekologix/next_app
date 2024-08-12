'use client'
import React, { useState } from 'react';
export default function Home() {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const handleClick = async () => {
    const response = await fetch('http://localhost:3004/answerstream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputValue }),
    });
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        break
      };
      console.log('Received: ', value);
      setValue((prev) => prev + value);
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
      }}
    >
      <div
        style={{
          backgroundColor: '#E0E0E0',
          color: 'black',
          padding: '10px',
          borderRadius: '10px',
          marginBottom: '10px',
        }}
      >
        {value}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your message..."
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginTop: '10px',
        }}
      />
      <button
        onClick={handleClick}
        style={{
          background: 'blue',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Send
      </button>
    </div>
  );
}