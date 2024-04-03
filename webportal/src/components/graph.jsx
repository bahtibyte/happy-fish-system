import React from 'react';
import '../css/graph.css';

const Graph = ({ minY, maxY }) => {
  // Calculate interval between y-axis lines
  const interval = (maxY - minY) / 4;

  return (
    console.log("interval: ", interval)
  );
};

export default Graph;
