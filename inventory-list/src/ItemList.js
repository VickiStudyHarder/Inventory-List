// ItemList.js
import React from "react";
import ListItem from "./ListItem";
import InputField from "./InputField";

function ItemList({
  items,
  activeItem,
  newItem,
  onItemSelect,
  onItemDelete,
  onAddItem,
}) {
  return (
    <div className="list-container">
      <InputField onAddItem={onAddItem} />

      <div className="item-count">List ({items.length})</div>

      {items.map((item, index) => (
        <ListItem
          key={index}
          name={item}
          isActive={index === activeItem}
          onClick={() => onItemSelect(index)}
          onDelete={(e) => {
            e.stopPropagation(); // Prevent triggering onClick event on the parent element
            onItemDelete(index);
          }}
        />
      ))}
    </div>
  );
}

export default ItemList;
