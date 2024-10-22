import React from "react";
import data from "../constant/data"; // Import your experience data
import './components.style.css'; // Import your CSS file

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="experience-title" >Professional Experience</h2>
      <div className="experience-items">
        {data.experienceData.map((item, index) => (
          <div className="experience-item" key={index}>
            <h3 className="experience-item-title">{item.role}</h3>
            <p className="experience-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
