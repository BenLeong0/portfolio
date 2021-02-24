import React from "react";

const SkillBar = (props) => {
  const fillWidth = { width: props.width };

  return (
    <div className="skillbar col-10">
      <div className="skillbar-title col-4">{props.title}</div>
      <div className="skillbar-bar-box col-8">
        <div className="skillbar-bar">
          <div className="skillbar-fill" style={fillWidth} />
          <div className="skillbar-percent">{props.width} </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
