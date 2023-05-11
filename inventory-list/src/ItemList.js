// ItemList.js
import React from 'react';
import ListItem from './ListItem';

function ItemList({ items, activeItem, onItemSelect }) {
  return (
    <div className="list-container">
      <div className="item-count">List ({items.length})</div>
      {items.map(item => (
        <ListItem
          key={item}
          name={item}
          isActive={item === activeItem}
          onClick={() => onItemSelect(item)}
        />
      ))}
    </div>
  );
}

export default ItemList;
