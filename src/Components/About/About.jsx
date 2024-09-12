import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-image">
            <img
              src="/Image/sideimg.jpg"
              alt="Your Portrait"
              className="profile-image"
            />
          </div>
          <div className="about-content">
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              Hi, I'm <span className="highlight">Prasad Deshpande</span>, a
              passionate Full-Stack Web Developer with expertise in modern web
              technologies. I have been crafting beautiful and functional
              websites for over 2 years. My focus is on building responsive,
              fast, and engaging user experiences.
            </p>
            <p className="about-description">
              I specialize in{" "}
              <span className="highlight">
                JavaScript, React.js, Bootstrap, Node.js, MongoDB (MERN Stack)
              </span>
              , and I strive to stay updated with the latest trends in web
              development. I'm dedicated to creating innovative digital
              solutions that are not only visually stunning but also highly
              functional.
            </p>
            <div className="skills-section">
              <h2 className="skills-title">Skills & Expertise</h2>
              <ul className="skills-list">
                <li>Frontend Development</li>
                <li>React.js & JavaScript</li>
                <li>Responsive Web Design</li>
                <li>UI/UX Design</li>
                <li>CSS Animations & Effects</li>
              </ul>
            </div>
            <div className="cta-wrapper">
              <a href="#contact" className="cta-button">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
