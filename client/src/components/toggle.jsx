import React, { useState } from 'react';
import '../css/toggle.css';

function Toggle({ onTabClick }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabClick(tab);
  };

  return (
    <div className='toggle'>
      <button className={activeTab === "dashboard" ? "dashboard-button active" : "dashboard-button"} onClick={() => handleTabClick("dashboard")}>Dashboard</button>
      <button className={activeTab === "controls" ? "controls-button active" : "controls-button"} onClick={() => handleTabClick("controls")}>Controls</button>
    </div>
  );
}

export default Toggle;