import React from "react";
import data from "../constant/data"; 
import './components.style.css'; 

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="experience-title" >Professional Experience</h2>
      <div className="experience-items">
        {data.experienceData.map((item, index) => (
          <div className="experience-item" key={index}>
            <h3 className="experience-item-title">{item.role}</h3>
            <div className="experience-item-org">{item.org}</div>
            <p className="experience-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
