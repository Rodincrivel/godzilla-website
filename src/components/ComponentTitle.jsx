import React from 'react';
import '../styles/componentTitle.css'; 

const ComponentTitle = ({ title, subtitle }) => {
  return (
    <div className="component-title">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default ComponentTitle;
