import { useState } from 'react';
import Dashboard from './components/dashboard'
import Heading from './components/heading'
import './css/app.css'

function HappyFish() {
  const [showDashboard, setShowDashboard] = useState(true);

  const handleTabClick = (tab) => {
    if (tab === "dashboard") {
      setShowDashboard(true);
    } else if (tab === "controls") {
      setShowDashboard(false);
    }
  };

  return (
    <div>
      <Heading onTabClick={handleTabClick} />
      {showDashboard && <Dashboard />}
    </div>
  )
}

export default HappyFish;