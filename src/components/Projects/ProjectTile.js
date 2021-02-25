import React from "react";

const ProjectTile = (props) => {
  const project = props.project;

  const handleClick = (e) => {
    props.createPopup(project);
  };

  return (
    <div
      className="col-4 project-tile"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/project-images/img-${project.id}.png)`,
      }}
    >
      <div className="project-info">
        <div className="project-content">
          <div className="project-title">{project.name}</div>
          <div className="project-text">{project.intro}</div>
          {project.techs.map((tech) => (
            <span className="project-tech" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="project-link" onClick={handleClick}>
          Learn more
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
