import React from "react";
import project from "./data/project.json";
import "./Projects.css"; 

const Projects = () => {
  return (
    <div className="projects" id="Projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {project.map((data) => {
          return (
            <div key={data.id} className="project-card">
              <div className="card" data-aos="fade-up">
                <div className="card-img-container">
                  <img
                    src={data.imgsrc}
                    className="card-img"
                    alt={data.title}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <div className="card-buttons">
                    <a href={data.demo} className="btn demo-btn" target="_blank">
                      Demo
                    </a>
                    <a href={data.source} className="btn source-btn" target="_blank">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
