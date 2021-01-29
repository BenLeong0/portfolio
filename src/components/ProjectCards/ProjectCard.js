import React from "react";
import CommitGraphBox from "./CommitGraphBox";
import LinkBox from "./LinkBox";
import ProjectImage from "./ProjectImage";

// <img
//   src={`${process.env.PUBLIC_URL}/ProjectImages/${project.id}.png`}
//   alt={project.id}
// />

class ProjectCard extends React.Component {
  render() {
    const project = this.props;
    return (
      <div className="project-card">
        <div className="project-text col-9">
          <div className="project-title">{project.name}</div>
          <div className="project-description">
            {project.description.map((paragraph, index) => {
              return <p key={"para" + index}>{paragraph}</p>;
            })}
          </div>
        </div>

        <div className="col-3">
          {project.github_public ? (
            <CommitGraphBox {...project} />
          ) : (
            <ProjectImage {...project} />
          )}
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
      </div>
    );
  }
}

export default ProjectCard;
