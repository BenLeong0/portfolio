import React from "react";

const SectionTitle = (props) => {
  return (
    <>
      <div className="section-header">{props.title}</div>
      <div className="section-header-bar"></div>
    </>
  );
};

export default SectionTitle;
