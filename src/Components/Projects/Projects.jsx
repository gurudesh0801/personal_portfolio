import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Legends Library",
      description:
        "The Legends Library Admin Management Web App is a MERN stack-based platform that simplifies library operations through a user-friendly admin dashboard. It includes features like admission management, automated fee reminders, member tracking, and book catalog management, offering efficient tools for library administration.",
      image: "/Image/project1.png",
      techStack: ["React.js", "Express.js", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Online News Portal (Web App)",
      description:
        "The Online News Portal Web App is a dynamic platform for delivering real-time news updates across various categories like politics, technology, entertainment, and sports. Built for seamless content management and user interaction, the app features article publishing, comment sections, and curated news feeds, providing a comprehensive and engaging experience for readers.",
      image: "/Image/project2.png",
      techStack: ["React.js", "Express.js", "Node.js", "MongoDB"],
      link: "#",
    },
    // Add more projects here...
  ];

  return (
    <section id="projects" className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          A showcase of my work that includes web development, design, and more.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tech-stack">
                {project.techStack.map((tech, idx) => (
                  <li key={idx} className="tech-item">
                    {tech}
                  </li>
                ))}
              </ul>
              <a href={project.link} className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
