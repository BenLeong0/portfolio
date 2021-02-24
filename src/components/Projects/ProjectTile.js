import React from "react";

const ProjectTile = (props) => {
  return (
    <div
      className="col-4 project-tile"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/project-images/img-${props.id}.png)`,
      }}
    >
      <div className="project-info">
        <div className="project-content">
          <div className="project-title">{props.name}</div>
          <div className="project-text">{props.intro}</div>
          {props.techs.map((tech) => (
            <span className="project-tech" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="project-link">Learn more</div>
      </div>
    </div>
  );
};

export default ProjectTile;
