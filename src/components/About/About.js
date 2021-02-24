import React from "react";
import "./About.css";
import SectionTitle from "../Shared/SectionTitle";

import Introduction from "./Introduction";
import SkillBars from "./SkillBars";

const About = (props) => {
  return (
    <section id="about">
      <div className="about-content page-box">
        <SectionTitle title="about" />
        <Introduction />
        <SkillBars />
      </div>
    </section>
  );
};

export default About;
