import React from 'react';
import './Projects.css';
import busArrivalImg from '../images/BoardPac.PNG'; // Replace with actual image paths
import rpalInterpreterImg from '../images/BoardPac.PNG';
import bankTransactionImg from '../images/BoardPac.PNG';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* Project 1 */}
        <div className="project-card">
          <img src={busArrivalImg} alt="Bus Arrival Time Prediction" className="project-image" />
          <div className="project-content">
            <h3>Bus Arrival Time Prediction</h3>
            <p>A Data Science and Engineering project which uses machine learning concepts for bus arrival time prediction under heterogeneous traffic conditions.</p>
            <p><strong>Contribution:</strong> Machine Learning Models</p>
            <p><strong>Languages:</strong> Python</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={rpalInterpreterImg} alt="RPAL Interpreter" className="project-image" />
          <div className="project-content">
            <h3>RPAL Interpreter</h3>
            <p>An Interpreter for the functional language RPAL consisting of a scanner, parser, and a CSE machine. Implemented as a group assignment under CS3513 - Programming Languages.</p>
            <p><strong>Contribution:</strong> Parser</p>
            <p><strong>Languages:</strong> Java</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src={bankTransactionImg} alt="Bank Transaction Management System" className="project-image" />
          <div className="project-content">
            <h3>Bank Transaction Management System</h3>
            <p>A bank transaction management system with a web application implemented as a group project under CS3043 - Database systems.</p>
            <p><strong>Contribution:</strong> Database, Backend</p>
            <p><strong>Languages:</strong> JavaScript, SQL</p>
            <p><strong>Frameworks:</strong> Node, React.js</p>
            <p><strong>Database:</strong> MySQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;