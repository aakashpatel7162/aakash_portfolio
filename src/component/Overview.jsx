import { useState, useEffect } from "react";
import './components.style.css'; // Import your CSS file

const OverviewSection = () => {
  const aboutUsData = [
    {
      title: "Who I Am",
      content:
        "Passionate Front-End Software Developer with experience in building responsive, user-centric web applications. Proficient in modern JavaScript frameworks such as React.js and Node.js."
    },
    {
      title: "Key Insights",
      content:
        "I am a passionate Software Engineer with a strong foundation in both front-end and back-end development, complemented by my expertise in data visualization."
    },
    {
      title: "My Ideas",
      content:
        "With a focus on building scalable and efficient applications, I thrive on challenges that allow me to leverage my problem-solving abilities."
    },
    {
      title: "Skills & Expertise",
      content:
        "I believe in the power of data to drive decisions and enhance user engagement, transforming complex datasets into meaningful insights."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % aboutUsData.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [aboutUsData.length]);

  return (
    <div className="circular-cards-container">
      {aboutUsData.map((item, index) => (
        <div
          key={index}
          className={`card ${index === activeIndex ? "active" : "hidden"}`}
        >
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewSection;
