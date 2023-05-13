// InputField.js
import React, { useState } from 'react';

function InputField({ onAddItem }) {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddItem = () => {
    const trimmedInput = input.trim();

    if (trimmedInput) {
      onAddItem(trimmedInput);
      setInput('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="input-container">
      <input
        className="input-field"
        placeholder="Add your new item"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
      className='input-btn'
       onClick={handleAddItem}>Add</button>
    </div>
  );
}

export default InputField;
