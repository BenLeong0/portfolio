import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import "./Skills.css";
import { Fade } from "react-awesome-reveal";

import SkillBox from "./SkillBox";

const Skills = (props) => {
  const skills = require("./Skills.json").items;

  return (
    <section id="skills">
      <Fade direction="up" triggerOnce="true" fraction="0.4">
        <div className="skills-content page-box">
          <SectionTitle title="Key Skills" />
          <div className="skills-wrap">
            <Fade
              direction="up"
              triggerOnce="true"
              fraction="0.4"
              cascade="true"
              damping="0.1"
            >
              {skills.map((skill) => (
                <SkillBox {...skill} key={skill.title} />
              ))}
            </Fade>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Skills;
