import React from "react";
import "./ProjectCards.css";
import ProjectCard from "./ProjectCard";

function ProjectCards() {
  const projects = require("./projects.json").items;
  return (
    <>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </>
  );
}

export default ProjectCards;
