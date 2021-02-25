import { React, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import "./Projects.css";

import ProjectTile from "./ProjectTile";
import ProjectPopup from "./ProjectPopup";

const Projects = (props) => {
  const projects = require("./Projects.json").items;

  const [currProject, setCurrProject] = useState({
    techs: [],
    description: [],
    links: [],
  });
  const [popupDisplay, setPopupDisplay] = useState("none");

  const createPopup = (project) => {
    setCurrProject(project);
    setPopupDisplay("block");
  };

  const hidePopup = () => {
    setPopupDisplay("none");
  };

  return (
    <section id="projects">
      <div className="projects-content page-box">
        <SectionTitle title="projects" />
        <div className="project-list">
          {projects.map((project) => (
            <ProjectTile
              project={project}
              createPopup={createPopup}
              key={project.name}
            />
          ))}
        </div>
      </div>
      <ProjectPopup
        project={currProject}
        popupDisplay={popupDisplay}
        hidePopup={hidePopup}
      />
    </section>
  );
};

export default Projects;
