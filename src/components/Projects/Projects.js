import { React, useState } from "react";
import "./Projects.css";
import { Fade } from "react-awesome-reveal";

import ProjectTile from "./ProjectTile";
import ProjectPopup from "./ProjectPopup";

const Projects = (props) => {
  const projects = require("./Projects.json").items;

  const [currProject, setCurrProject] = useState({
    techs: [],
    description: [],
    links: [],
    media: [],
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
      <Fade direction="up" triggerOnce="true" fraction="0.4">
        <div className="projects-content page-box">
          <div className="section-header">Projects</div>
          <div className="project-list">
            <Fade
              direction="up"
              triggerOnce="true"
              fraction="0.4"
              cascade="true"
              damping="0.1"
            >
              {projects.map((project) => (
                <ProjectTile
                  project={project}
                  createPopup={createPopup}
                  key={project.name}
                />
              ))}
            </Fade>
          </div>
        </div>
      </Fade>
      <ProjectPopup
        project={currProject}
        popupDisplay={popupDisplay}
        hidePopup={hidePopup}
      />
    </section>
  );
};

export default Projects;
