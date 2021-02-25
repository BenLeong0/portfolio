import React from "react";
import "./ProjectPopup.css";

import PopupExitButton from "./PopupExitButton";

const ProjectPopup = (props) => {
  const project = props.project;

  const handleBackgroundClick = (e) => {
    props.hidePopup();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

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
            <div className="popup-techs">
              {props.project.techs.map((tech) => (
                <div className="popup-tech">{tech}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="popup-images">
            <img src="" alt={`${project.id} img`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
