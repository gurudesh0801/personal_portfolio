import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="education-header">
          <h1 className="section-title">My Education</h1>
          <p className="section-subtitle">
            A glimpse into my academic journey and the knowledge I've gained.
          </p>
        </div>

        <div className="education-cards">
          <div className="education-card">
            <div className="card-header">
              <h2 className="degree-title">Bachelor's in Computer Science</h2>
              <h3 className="institute-name">
                Modern College, Ganeshkhind, Pune
              </h3>
              <span className="education-year">2021 - 2024</span>
            </div>
            <div className="card-body">
              <p>
                Completed a 3-year degree program focused on software
                development, data structures, and web technologies. Graduated
                with honors and specialized in Full-Stack Development.
              </p>
            </div>
          </div>

          <div className="education-card">
            <div className="card-header">
              <h2 className="degree-title">H.S.C</h2>
              <h3 className="institute-name">Haribhai.V.Desai College, Pune</h3>
              <span className="education-year">2019 - 2021</span>
            </div>
            <div className="card-body">
              <p>
                Specialized in Science. Developed a passion for coding and
                problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
