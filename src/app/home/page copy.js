'use client'
import React, { useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const handleClick = async () => {
    try {
      console.log("first");
      const response = await axios.post('http://localhost:3004/answerstream', { message: inputValue }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = response.data;
      setValue((prev) => prev + responseData);
    } catch (error) {
      console.error('Error:', error);
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
          padding: '5px',
          margin: '10px 0',
          borderRadius: '5px',
          color:'red',
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