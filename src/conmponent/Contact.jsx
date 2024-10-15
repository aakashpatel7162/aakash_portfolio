import React from 'react'
import data from "../constant/data";
import './components.style.css'
export default function Contact() {
const {contactMePage}=data
  return (
    <div><h2>Get in Touch</h2>
    <form action="/submit" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
    
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
    
        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />
    
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
    
        <button type="submit">Send Message</button>
    </form>
    </div>
  )
}
