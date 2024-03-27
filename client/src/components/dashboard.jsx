import React from 'react';
import '../css/dashboard.css'
import Card from "./card";

function Dashboard() {
  return (
    <div className='dashboard'>
      <Card title="pH Level" value="8.04" units="pH" />
    </div>
  )
}

export default Dashboard;