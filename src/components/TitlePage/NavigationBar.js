import { React, useState } from "react";
import "./NavigationBar.css";

import NavigationLink from "./NavigationLink";
import NavigationBarHamburger from "./NavigationBarHamburger.svg";

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

  const [linkWrapHeight, setLinkWrapHeight] = useState("50");

  const toggleHamburger = () => {
    setLinkWrapHeight(300 - linkWrapHeight);
  };

  return (
    <nav>
      <div className="link-wrap" style={{ height: linkWrapHeight }}>
        <div className="nav-hamburger" onClick={toggleHamburger}>
          <img src={NavigationBarHamburger} alt="nav bar hamburger" />
        </div>
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
