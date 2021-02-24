import React from "react";

import pfp from "./pfp.png";

import SocialLink from "./SocialLink";

const Introduction = (props) => {
  // BEWARE url for CV
  const socialLinks = require("./SocialLinks.json").items;

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
        <SocialLink link={link} key={link.id} />
      ))}
    </div>
  );
};

export default Introduction;
