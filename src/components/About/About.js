import React from "react";
import "./About.css";
import SectionTitle from "../Shared/SectionTitle";

import Introduction from "./Introduction";

const About = (props) => {
  return (
    <section id="about">
      <div className="about-content page-box">
        <SectionTitle title="about" />
        <Introduction />
        <div className="col-6">yo</div>
      </div>
    </section>
  );
};

export default About;
