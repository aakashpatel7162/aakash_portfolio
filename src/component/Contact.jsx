import React, { useContext, useState, useEffect,useRef } from 'react';
import { FrameContext } from '../cart/FrameProvider'; // Ensure FrameContext is imported
import './components.style.css';

export default function Contact() {
  const { contactInfo } = useContext(FrameContext); // Access context data

  // Single state object to manage all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Pre-fill the subject if contactData exists from the FrameContext
  useEffect(() => {
    if (contactInfo) {
      setFormData((prevData) => ({
        ...prevData,
        subject: `Inquiry about ${contactInfo.type} by ${contactInfo.name}`
      }));
    }
  }, [contactInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value  
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process formData, e.g., send to a server or log it
    console.log(formData);
  };
  const nameInputRef = useRef(null);

  // Automatically focus on the name field when the component is rendered
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();  // Focus on the name input
    }
  }, [contactInfo]);
      return (
    <div className="contact-form-container">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}  // Controlled input for name
            onChange={handleInputChange}  // Update formData on change
            required 
            ref={nameInputRef}  
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}  // Controlled input for email
            onChange={handleInputChange}  // Update formData on change
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject}  // Controlled input for subject
            onChange={handleInputChange}  // Update formData on change
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={formData.message}  // Controlled input for message
            onChange={handleInputChange}  // Update formData on change
            required
          />
        </div>

        <button type="submit" className="submit-button">Send Message</button>
        <div style={{marginTop:"1rem"}}>
  <a href="mailto:aakashpatel7162@gmail.com">Or you can mail us directly <span class="highlight">here</span></a>
</div>

   </form>
    </div>
  );
}
