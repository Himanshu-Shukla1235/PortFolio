// src/ContactPage.js
import React, { useState } from 'react';
import './contactPage.css'; // Import the CSS file for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',   
  });

  const [isDarkMode, setIsDarkMode] = useState(true); // Add state for dark mode toggle

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or display a success message
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className={isDarkMode ? "Dark_contact-page" : "contact-page"}>
      <h1>Contact Us</h1>
      <form className={isDarkMode ? "Dark_contact-form" : "contact-form"} onSubmit={handleSubmit}>
        <div className={isDarkMode ? "Dark_form-group" : "form-group"}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={isDarkMode ? "Dark_form-group" : "form-group"}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={isDarkMode ? "Dark_form-group" : "form-group"}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className={isDarkMode ? "Dark_submit-button" : "submit-button"}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
