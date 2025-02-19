import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section id="features">
      <h2>Our Features</h2>
      <div className="features-container">
        <div className="feature">
          <h3>Secure & Reliable</h3>
          <p>Your data is safe with top-notch security measures.</p>
        </div>
        <div className="feature">
          <h3>User-Friendly Interface</h3>
          <p>Intuitive design for a seamless experience.</p>
        </div>
        <div className="feature">
          <h3>24/7 Support</h3>
          <p>Get assistance anytime you need it.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
