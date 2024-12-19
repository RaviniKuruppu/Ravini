import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1' },
    { title: 'Project 2', description: 'Description of project 2' },
    { title: 'Project 3', description: 'Description of project 3' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Projects;
