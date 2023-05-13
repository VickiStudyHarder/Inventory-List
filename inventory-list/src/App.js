// App.js
import React, { useState } from "react";
import data from "./data";
import "./App.css";
import TabList from "./TabList";
import ItemList from "./ItemList";

function App() {
  // Add a new state variable for the items
  const [items, setItems] = useState(data);
  const [activeTab, setActiveTab] = useState(data[0].name);
  const [activeItem, setActiveItem] = useState(null);
  const [newItem] = useState(null); //new state variable

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveItem(null); // Reset active item when switching tabs
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleItemDelete = (tabName, index) => {
    const newItems = [...items];
    newItems.find((item) => item.name === tabName).items.splice(index, 1);
    setItems(newItems);
    setActiveItem(null);
  };

  const handleItemAdd = (tabName, newItemName) => {
    const newItems = items.map((tab) =>
      tab.name === tabName
        ? { ...tab, items: [...tab.items, newItemName] }
        : tab
    );
    setItems(newItems);
  };

  const currentTabData = items.find((datum) => datum.name === activeTab);

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">Inventory</h1>
      </div>
      <TabList tabs={data} activeTab={activeTab} onTabClick={handleTabClick} />
      <ItemList
        items={currentTabData.items}
        activeItem={activeItem}
        newItem={newItem}
        onItemSelect={handleItemClick}
        onItemDelete={(index) => handleItemDelete(activeTab, index)}
        onAddItem={(newItemName) => handleItemAdd(activeTab, newItemName)}
      />
    </div>
  );
}

export default App;
