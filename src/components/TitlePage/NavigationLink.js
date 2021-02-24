import React from "react";

const NavigationLink = (props) => {
  const text = props.link.text;
  const sectionName = props.link.sectionName;

  const handleClick = () => {
    let target = document.querySelector(`#${sectionName}`);
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`nav-link ${props.active === sectionName ? "active" : ""}`}
      id="nav-bar"
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default NavigationLink;
