import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-us");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">Prasad D.</div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <a href="#home" className="nav-item">
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={scrollToAbout} className="nav-item">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-item">
            Projects
          </a>
        </li>
        <li>
          <a href="#services" className="nav-item">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-item">
            Contact
          </a>
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={handleToggle}>
        {isMobile ? <>&#x2716;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;
