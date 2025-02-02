import React, { useState } from "react";
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-us-section">
      <div className="overlay">
        <div className="contact-para">
          <h1>Contact Us</h1>
          <p>Have questions or need assistance? Reach out to us and we'll be happy to help!</p>
        </div>
        <div className="contact-content">
          <p>We'd love to hear from you! Please fill out the form below.</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
