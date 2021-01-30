import React from "react";

function ProjectImage(props) {
  return (
    <div className="project-image">
      <img
        src={process.env.PUBLIC_URL + `/${props.image_url}`}
        alt={props.id}
      />
    </div>
  );
}

export default ProjectImage;
