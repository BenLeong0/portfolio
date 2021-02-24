import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import "./Skills.css";

import SkillBox from "./SkillBox";

const Skills = (props) => {
  const skills = require("./Skills.json").items;

  return (
    <section id="skills">
      <div className="skills-content page-box">
        <SectionTitle title="Key Skills" />
        <div className="skills-wrap">
          {skills.map((skill) => (
            <SkillBox {...skill} key={skill.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
