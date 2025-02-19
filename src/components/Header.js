import React from "react";
import "./Header.css";

const smoothScroll = (e, targetId) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h1>My Landing Page</h1>
        <ul>
          <li><a href="#hero" onClick={(e) => smoothScroll(e, "hero")}>Home</a></li>
          <li><a href="#features" onClick={(e) => smoothScroll(e, "features")}>Features</a></li>
          <li><a href="#testimonials" onClick={(e) => smoothScroll(e, "testimonials")}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => smoothScroll(e, "contact")}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
