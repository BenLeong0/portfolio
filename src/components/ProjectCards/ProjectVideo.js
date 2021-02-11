import React from "react";

function ProjectVideo(props) {
  return (
    <div className="project-video">
      <video width="190px" height="108px" autoPlay muted loop>
        <source
          src={process.env.PUBLIC_URL + `/${props.video_url}`}
          type="video/webm"
          alt={props.id}
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ProjectVideo;
