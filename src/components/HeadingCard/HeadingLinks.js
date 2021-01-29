import React from "react";

// Create array of profiles and iterate over them

const ProfileButton = props => (
  <>
    <div className="profile-col">
      <a
        className="profile-link"
        id={props.id}
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        <svg width="40" height="40" viewBox="0 0 24 24">
          <path d={props.path} />
        </svg>
      </a>
    </div>
  </>
);

function HeadingLinks() {
  const profiles = require("./profiles.json").items;

  return (
    <div id="heading-links">
      {profiles.map(profile => (
        <ProfileButton key={profile.id} {...profile} />
      ))}
    </div>
  );
}

export default HeadingLinks;
