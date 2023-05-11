// TabList.js
import React from 'react';
import Tab from './Tab';

function TabList({ tabs, activeTab, onTabClick }) {
  return (
    <div className="tabs-container">
      {tabs.map(tab => (
        <Tab
          key={tab.name}
          name={tab.name}
          isActive={tab.name === activeTab}
          onClick={() => onTabClick(tab.name)}
        />
      ))}
    </div>
  );
}

export default TabList;
