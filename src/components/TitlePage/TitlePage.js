import React from "react";
import Sticky from "react-sticky-el";
import "./TitlePage.css";

import TitleContent from "./TitleContent";
import NavigationBar from "./NavigationBar";

const TitlePage = (props) => {
  return (
    <section id="home">
      <TitleContent />
      <Sticky>
        <NavigationBar currentComponent={props.currentComponent} />
      </Sticky>
    </section>
  );
};

export default TitlePage;
