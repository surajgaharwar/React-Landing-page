import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section id="features">
      <h2>Our Features</h2>
      <div className="features-container">
        <div className="feature">
          <h3>Fast Performance</h3>
          <p>Lightning-fast loading speed.</p>
        </div>
        <div className="feature">
          <h3>Responsive Design</h3>
          <p>Looks great on all devices.</p>
        </div>
        <div className="feature">
          <h3>SEO Optimized</h3>
          <p>Get more visibility online.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
