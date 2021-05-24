import React from "react";

import SkillBar from "./SkillBar";

const SkillBars = (props) => {
  class Skill {
    constructor(title, width) {
      this.title = title;
      this.width = width;
    }
  }

  const skills = [
    new Skill("Maths", "90%"),
    new Skill("Python", "80%"),
    new Skill("TypeScript", "80%"),
    new Skill("Algorithms", "80%"),
    new Skill("HTML/CSS", "80%"),
    new Skill("ReactJS", "70%"),
    new Skill("Japanese", "80%"),
  ];

  return (
    <div className="col-6 skillbars">
      {skills.map((skill) => (
        <SkillBar {...skill} key={skill.title} />
      ))}
    </div>
  );
};

export default SkillBars;
