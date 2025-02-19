import React, { useState } from "react";
import "./ContactForm.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
    } else if (!validateEmail(formData.email)) {
      setError("Enter a valid email.");
    } else {
      setError("");
      alert("Message sent successfully!");
    }
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
        {error && <p className="error">{error}</p>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
