import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT Authentication"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Postman", "AWS"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="skills-header">
        <h1 className="skills-title">Skills & Expertise</h1>
        <p className="skills-subtitle">
          A collection of technologies and tools I have mastered over the years.
        </p>
      </div>
      <div className="skills-grid">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="skill-card">
            <h2 className="skill-category">{skillCategory.category}</h2>
            <ul className="skill-list">
              {skillCategory.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
