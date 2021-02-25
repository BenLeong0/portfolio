import React from "react";
import "./About.css";
import SectionTitle from "../Shared/SectionTitle";
import { Fade } from "react-awesome-reveal";

import Introduction from "./Introduction";
import SkillBars from "./SkillBars";

const About = (props) => {
  return (
    <section id="about">
      <Fade direction="up" triggerOnce="true" fraction="0.4">
        <div className="about-content page-box">
          <SectionTitle title="about" />
          <Introduction />
          <SkillBars />
        </div>
      </Fade>
    </section>
  );
};

export default About;
