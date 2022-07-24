import React from "react";
import "./About.css";
import { Fade } from "react-awesome-reveal";

import Introduction from "./Introduction";

const About = (props) => {
  return (
    <section id="about">
      <Fade direction="up" triggerOnce="true" fraction="0.4">
        <div className="about-content page-box">
          <div className="section-header">About</div>
          <Introduction />
        </div>
      </Fade>
    </section>
  );
};

export default About;
