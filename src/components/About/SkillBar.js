import React from "react";

const SkillBar = (props) => {
  const fillWidth = { width: props.width };

  return (
    <div className="skillbar col-10">
      <div className="skillbar-title">{props.title}</div>
      <div className="skillbar-bar">
        <div className="skillbar-fill" style={fillWidth} />
        <div className="skillbar-percent">{props.width} </div>
      </div>
    </div>
  );
};

export default SkillBar;
