import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import "./Projects.css";

import ProjectTile from "./ProjectTile";

const Projects = (props) => {
  const projects = require("./Projects.json").items;

  return (
    <section id="projects">
      <div className="projects-content page-box">
        <SectionTitle title="projects" />
        <div className="project-list">
          {projects.map((project) => (
            <ProjectTile {...project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
