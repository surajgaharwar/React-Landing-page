import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h2>Welcome to Our Website</h2>
        <p>Your one-stop solution for amazing services.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
