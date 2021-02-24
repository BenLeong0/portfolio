import { React, useState } from "react";

const ProjectTile = (props) => {
  const [active, setActive] = useState("0");

  const isActive = () => {
    setActive("1");
  };

  const isNotActive = () => {
    setActive("0");
  };

  return (
    <div
      className="col-4 project-tile"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/project-images/img-${props.id}.png)`,
      }}
      onMouseOver={isActive}
      onMouseOut={isNotActive}
    >
      <div className="project-info" style={{ opacity: active }}>
        <div className="project-title">{props.name}</div>
        <div className="project-text">{props.intro}</div>
        {props.techs.map((tech) => (
          <span className="project-tech" key={tech}>
            {tech}
          </span>
        ))}
        <div className="project-link">Learn more</div>
      </div>
    </div>
  );
};

export default ProjectTile;
