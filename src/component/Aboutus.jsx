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
        <div className="buttons">
      <button className="contact_btn" onClick={()=>window.scroll({ top: 1800, behavior: 'smooth' })}>Contact Me</button>
     

    <a href={IMAGES.my_resume} download="aakash_resume.pdf" style={{textDecoration:"none"}}>
  <button className="resume-btn">   <AiOutlineDownload  size={22}/>Resume</button>
</a>
      <a href="https://www.linkedin.com/in/aakash-patel-9b24531a2/" target="_blank" rel="noopener noreferrer"  className="social_icon" style={{color:"#0A66C8"}}>
      
        <AiFillLinkedin  size={25} />
      </a>
      <a href="https://github.com/aakashpatel7162" target="_blank" rel="noopener noreferrer " className="social_icon">
      <SiGithub size={25} />
      </a>
    </div>
  
    </div>
</section>

  );
};

export default About;
