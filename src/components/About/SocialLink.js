import React from "react";

const SocialLink = (props) => {
  const name = props.link.name;
  const image = props.link.image;
  return <div className="col-3 social-link">{name}</div>;
};

export default SocialLink;
