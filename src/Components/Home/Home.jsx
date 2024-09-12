import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <div className="intro-text">
          <h1>
            Hi, I'm <span className="highlight">Prasad Deshpande</span>
          </h1>
          <p>
            A passionate <strong>Full-Stack Web Developer</strong> focused on
            building advanced and visually appealing web applications.
          </p>
          <a href="#portfolio" className="cta-button">
            View My Work
          </a>
        </div>
        <div className="profile-image-main">
          <img src="/Image/myimg.jpg" alt="Your Profile" />
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">Scroll Down</a>
      </div>
    </div>
  );
};

export default Home;
