'use client'
import React, { useState } from 'react';
export default function Home() {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  let message = inputValue;
  const handleClick = async () => {
    const response = await fetch('http://localhost:3004/answerstream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      console.log('Received: ', value);
      setValue((prev) => prev + value);
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <main>
      <p>Streaming response:</p>
      <div
        style={{
          whiteSpace: 'pre-wrap',
          color: 'black',
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      >
        {value}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text to send"
        style={{
          width: '100%',
          color: 'red',
          padding: '5px',
          margin: '10px 0',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={handleClick}
        style={{
          background: 'blue',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </main>
  );
}
