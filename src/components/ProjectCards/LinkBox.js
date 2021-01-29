import React from "react";

function LinkBox(props) {
  return (
    <div className="project-link-box col-10">
      <div className="project-link-title col-1">
        <b>Links: </b>
      </div>
      <div className="project-links col-11">
        {props.links.map((link, index) => (
          <div key={index} className="project-link">
            <a href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkBox;
