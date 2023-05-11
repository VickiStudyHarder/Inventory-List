// ListItem.js
import React from 'react';

function ListItem({ name, isActive, onClick }) {
  return (
    <li
      className={`list-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {name}
    </li>
  );
}

export default ListItem;
