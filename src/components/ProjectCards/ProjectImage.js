import React from "react";

function ProjectImage(props) {
  return (
    <div className="project-image">
      <img
        src={process.env.PUBLIC_URL + "/" + props.id + "-img.png"}
        alt={props.id}
      />
    </div>
  );
}

export default ProjectImage;
