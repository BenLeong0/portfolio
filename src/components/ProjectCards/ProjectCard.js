import React from "react";
import CommitGraphBox from "./CommitGraphBox";
import LinkBox from "./LinkBox";
import ProjectImage from "./ProjectImage";
import ProjectVideo from "./ProjectVideo";
import { Fade } from "react-awesome-reveal";

// <img
//   src={`${process.env.PUBLIC_URL}/ProjectImages/${project.id}.png`}
//   alt={project.id}
// />

class ProjectCard extends React.Component {
  render() {
    const project = this.props;
    return (
      <Fade
        className="project-card card-general"
        direction="up"
        triggerOnce="true"
        fraction="0.4"
      >
        <>
          <div className="project-text col-9">
            <div className="project-title">
              {project.name}
              {/* {project.wip ? <span className="wip-marker">(WIP)</span> : <></>} */}
            </div>
            <div className="project-description">
              {project.description.map((paragraph, index) => {
                return <p key={"para" + index}>{paragraph}</p>;
              })}
            </div>
          </div>

          <div className="col-3 project-r-col">
            {project.video_urls.map((url) => (
              <ProjectVideo {...project} video_url={url} key={url} />
            ))}
            {project.image_urls.map((url) => (
              <ProjectImage {...project} image_url={url} key={url} />
            ))}
            {project.github_public ? <CommitGraphBox {...project} /> : <></>}
          </div>

          <LinkBox {...project} />
          <div className="project-tags col-12">
            <span>Tags: </span>
            {project.tags.map((tag, index) => (
              <span key={tag} className="project-tag">
                {(index > 0 ? " ; " : "") + tag}
              </span>
            ))}
          </div>
        </>
      </Fade>
    );
  }
}

export default ProjectCard;
