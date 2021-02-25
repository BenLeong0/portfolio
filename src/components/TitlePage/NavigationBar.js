import React from "react";
import "./NavigationBar.css";

import NavigationLink from "./NavigationLink";

const NavigationBar = (props) => {
  class NavLink {
    constructor(text, sectionName) {
      this.text = text;
      this.sectionName = sectionName;
    }
  }

  const navLinks = [
    new NavLink("HOME", "home"),
    new NavLink("ABOUT", "about"),
    new NavLink("PROJECTS", "projects"),
    new NavLink("KEY SKILLS", "skills"),
  ];

  return (
    <nav>
      <div className="link-wrap">
        {navLinks.map((link) => (
          <NavigationLink
            link={link}
            key={link.text}
            active={props.currentComponent}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
