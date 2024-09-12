import React from "react";
import "./Achievements.css";

const Achievements = () => {
  return (
    <section className="achievements-container">
      <div className="achievements-header">
        <h1 className="achievements-title">Achievements & Awards</h1>
        <p className="achievements-subtitle">
          Recognition that fuels my passion to achieve more.
        </p>
      </div>

      <div className="achievements-grid">
        <div className="achievement-card">
          <div className="achievement-icon">
            <i className="fas fa-trophy"></i>
          </div>
          <div className="achievement-info">
            <h2>Best Developer Award 2024</h2>
            <p>
              Recognized as the Best Full-Stack Developer of the year for
              outstanding contributions to various projects. ex. Interaction
              (College Event Website)
            </p>
            <span className="achievement-date">Feb 2024</span>
          </div>
        </div>

        {/* Achievement 3 */}
        <div className="achievement-card">
          <div className="achievement-icon">
            <i className="fas fa-award"></i>
          </div>
          <div className="achievement-info">
            <h2>Certified MERN Developer</h2>
            <p>
              Earned a certification in MERN Stack for completing advanced
              coursework and developing multiple applications. (by Udemy)
            </p>
            <span className="achievement-date">July 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
