// Tab.js
import React from 'react';

function Tab({ name, isActive, onClick }) {
  return (
    <button
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Tab;
