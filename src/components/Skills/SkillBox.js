import React from "react";

const SkillBox = (props) => {
  const imageUrl = `${process.env.PUBLIC_URL}/skills-images/logo-${props.id}.png`;

  return (
    <div className="skill-box">
      <div className="skill-logo">
        <img
          width="120px"
          height="120px"
          src={imageUrl}
          alt={`${props.id}logo`}
        />
      </div>
      <div className="skill-text">
        <div className="skill-title">
          <h1>{props.title}</h1>
        </div>
        <div className="skill-content">{props.text}</div>
      </div>
    </div>
  );
};

export default SkillBox;
