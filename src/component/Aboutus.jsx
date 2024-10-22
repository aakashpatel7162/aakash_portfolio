import React from "react";
import data from "../constant/data";
import './components.style.css'; // Import your CSS file
import IMAGES from '../assets/images'
const About = () => {
  const { aboutUsPage } = data;

  return (
    <section class="about-us">
    <div class="about-content">
        <h2>About Me</h2>
        <p>
            I am a passionate software developer with extensive experience in building responsive, user-centric web applications. Proficient in modern JavaScript frameworks such as React.js and Node.js, I focus on writing clean, maintainable code and optimizing performance.
        </p>
        <p>
            Adept at translating UI/UX designs into high-quality code, I ensure cross-browser compatibility and adherence to accessibility standards, creating seamless experiences for all users.
        </p>
    </div>
    <div class="about-image">
        <img src={IMAGES.mySelf_image} alt="Your Name" />
    </div>
</section>

  );
};

export default About;
