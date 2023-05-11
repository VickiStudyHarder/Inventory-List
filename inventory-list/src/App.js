// App.js
import React, { useState } from 'react';
import data from './data';
import './App.css';
import TabList from './TabList';
import ItemList from './ItemList';

function App() {
  const [activeTab, setActiveTab] = useState(data[0].name);
  const [activeItem, setActiveItem] = useState('');

  function handleTabClick(tabName) {
    setActiveTab(tabName);
    setActiveItem('');  // Reset active item when switching tabs
  }

  function handleItemClick(itemName) {
    setActiveItem(itemName);
  }

  const currentTabData = data.find(datum => datum.name === activeTab);

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">Inventory</h1>
      </div>
      <TabList tabs={data} activeTab={activeTab} onTabClick={handleTabClick} />
      <ItemList items={currentTabData.items} activeItem={activeItem} onItemSelect={handleItemClick} />
    </div>
  );
}

export default App;
