import React from "react";

import pfp from "./pfp.png";

import SocialLink from "./SocialLink";

const Introduction = (props) => {
  class linkInfo {
    constructor(name, image) {
      this.name = name;
      this.image = image;
    }
  }

  const socialLinks = [
    new linkInfo("LinkedIn", "logo-linkedin.png"),
    new linkInfo("GitHub", "logo-github.png"),
    new linkInfo("Email", "logo-email.png"),
    new linkInfo("CV", "logo-cv.png"),
  ];

  return (
    <div className="col-6 introduction">
      <div className="about-pfp">
        <img src={pfp} alt="Profile" />
      </div>
      <div className="about-intro">
        <div className="about-intro-title">Who am I?</div>
        <br />I am a recent mathematics graduate from the University of Warwick.
        Since graduating I have been teaching myself to code, using mostly
        Python and JavaScript to work on personal projects.
      </div>
      {socialLinks.map((link) => (
        <SocialLink link={link} key={link.name} />
      ))}
    </div>
  );
};

export default Introduction;
