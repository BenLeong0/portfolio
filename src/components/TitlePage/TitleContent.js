import React from "react";

import ScrollButton from "./ScrollButton";

const TitleContent = (props) => {
  const buttonWidth = "48px";

  return (
    <div className="title-page">
      <div className="title-content">
        <div className="title-welcome">
          Hi, my name is <span className="title-name">Ben Leong</span>.<br />
          Welcome to my portfolio.
        </div>
        {/* <img src={ScrollButton} alt="Button to scroll down" /> */}
        <div style={{ margin: "auto", width: buttonWidth }}>
          <ScrollButton buttonWidth={buttonWidth} />
        </div>
      </div>
    </div>
  );
};

export default TitleContent;
