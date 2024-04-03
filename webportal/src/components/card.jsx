import React from 'react';
import '../css/card.css';
import Graph from './graph';

const Card = ({ title, value, units }) => {
  return (
    <div className="card">
      <div className="title"> {title} </div>
      <div className="value"> {value} <span className="units">{units}</span> </div>
      <Graph minY={5} maxY={80} />
    </div>
  );
};

export default Card;