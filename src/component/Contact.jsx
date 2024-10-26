import React, { useContext, useState, useEffect,useRef } from 'react';
import { FrameContext } from '../cart/FrameProvider'; // Ensure FrameContext is imported
import './components.style.css';
import data from '../constant/data';
export default function Contact() {
  const { contactInfo ,clickFrameis} = useContext(FrameContext); // Access context data

  // Single state object to manage all form fields
    const currentDeveloper=data.expertList[clickFrameis-1]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Pre-fill the subject if contactData exists from the FrameContext
  useEffect(() => {
    if (clickFrameis) {
      setFormData((prevData) => ({
        ...prevData,
        subject: `Inquiry about ${currentDeveloper.expertise}`
      }));
    }
  }, [clickFrameis]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value  
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    alert("You data is recorded , we will contact u shortly")
    setFormData({})
   

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzkMqTgAcY2EfUvPMyoyB26Gh6rBdP7g5Yf0dtrka6_5hz7u7NeF7rbxMZk7IRUCcfCaQ', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: new URLSearchParams(formData),
      });
      console.log(response,'response')
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('There was a problem submitting your form.');
    }
  };
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();  // Focus on the name input
    }
  }, [contactInfo]);
      return (
    <div className="contact-form-container">
      <span className='form-header'>Get In Touch</span>
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
        <div class="connect-connecter">
    <a href="mailto:aakashpatel7162@gmail.com">Or you can mail us directly <span class="highlight">here</span></a>
</div>
   </form>
    </div>
  );
}
