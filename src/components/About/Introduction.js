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
        Since graduation, I self-taught Python and JavaScript, and am currently
        working as a software engineer at{" "}
        <a href="https://myurbanjungle.com/">Urban Jungle Insurance</a>.
      </div>
      <div class="social-links-container">
        {socialLinks.map((link) => (
          <SocialLink link={link} key={link.id} />
        ))}
      </div>
    </div>
  );
};

export default Introduction;
