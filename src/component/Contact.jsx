import React, { useContext, useState, useEffect, useRef } from 'react';
import { FrameContext } from '../cart/FrameProvider';
import './components.style.css';
import data from '../constant/data';

export default function Contact() {
  const { contactInfo, clickFrameis } = useContext(FrameContext);
  const currentDeveloper = data.expertList[clickFrameis - 1];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    if (clickFrameis) {
      setFormData((prevData) => ({
        ...prevData,
        subject: `Inquiry about ${currentDeveloper.expertise}`,
      }));
    }
  }, [clickFrameis]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Your data has been recorded. We will contact you shortly.');

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzkMqTgAcY2EfUvPMyoyB26Gh6rBdP7g5Yf0dtrka6_5hz7u7NeF7rbxMZk7IRUCcfCaQ', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: new URLSearchParams(formData),
      });
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('There was a problem submitting your form.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="form-header">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="connect-connecter">
        <a href="mailto:aakashpatel7162@gmail.com">Or email us directly <span className="highlight">here</span></a>
      </div>
    </div>
  );
}
