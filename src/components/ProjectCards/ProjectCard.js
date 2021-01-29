import React from "react";
import CommitGraphBox from "./CommitGraphBox";
import LinkBox from "./LinkBox";

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
          <div className="project-description">{project.description}</div>
        </div>

        <div className="col-3">
          <CommitGraphBox {...project} />
        </div>

        <LinkBox {...project} />
        <div className="project-tags col-12">
          <span>Tags: </span>
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">
              {tag}{" "}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
