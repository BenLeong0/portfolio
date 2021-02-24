import React from "react";

const SocialLink = (props) => {
  const name = props.link.name;
  const url = props.link.url;
  const path = props.link.path;

  return (
    <a href={url} className="social-link" target="_blank" rel="noreferrer">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d={path} />
      </svg>
      <div className="social-link-title">{name}</div>
    </a>
  );
};

export default SocialLink;
