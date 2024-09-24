import React, { useState } from 'react';
import ButtonMailto from '../components/ButtonMailto.js';  // Import the ButtonMailto component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Encoded email address as a string, will be decoded in JavaScript
  const encodedEmail = '&#116;&#104;&#101;&#98;&#111;&#120;&#111;&#102;&#114;&#111;&#99;&#107;&#115;&#64;&#105;&#99;&#108;&#111;&#117;&#100;&#46;&#99;&#111;&#109;';

  const decodeEmail = (encoded) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = encoded;
    return txt.value;
  };

  const generateMailtoLink = () => {
    const email = decodeEmail(encodedEmail);  // Decode the email before using it
    const subject = "Box of Rocks Inquiry";
    const body = `Hi,%0D%0A%0D%0A${encodeURIComponent(formData.message)}%0D%0A%0D%0ARegards,%0D%0A${encodeURIComponent(formData.name)}%0D%0A${encodeURIComponent(formData.email)}`;
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />

        {/* Use the ButtonMailto component and pass the decoded mailto link */}
        <ButtonMailto mailto={generateMailtoLink()} label="Send Email" />
      </form>
    </div>
  );
};

export default Contact;
