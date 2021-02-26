import { React, useEffect, useState } from "react";
import "./ProjectPopup.css";

import PopupExitButton from "./PopupExitButton";
import PopupCarousel from "./PopupCarousel";

const ProjectPopup = (props) => {
  const project = props.project;

  const handleBackgroundClick = (e) => {
    props.hidePopup();
  };
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  // Hide links section if project has no links
  const [hasLinks, setHasLinks] = useState(0);
  useEffect(() => {
    project.links.length > 0 ? setHasLinks(1) : setHasLinks(0);
  }, [project]);

  return (
    <div
      className="popup"
      style={{ display: props.popupDisplay }}
      onClick={handleBackgroundClick}
    >
      <div className="popup-content" onClick={handleContentClick}>
        <PopupExitButton hidePopup={props.hidePopup} />
        <div className="popup-title">{project.name}</div>
        <div className="col-7">
          <div className="popup-text">
            {project.description.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
            <div className="popup-links" style={{ opacity: hasLinks }}>
              <b>Links:</b>
              {project.links.map((link) => (
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              ))}
            </div>
            <div className="popup-techs">
              {props.project.techs.map((tech) => (
                <div className="popup-tech">{tech}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="popup-images">
            <PopupCarousel id={project.id} media={project.media} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
