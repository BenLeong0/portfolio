import React from "react";
import "./TitlePage.css";

import TitleContent from "./TitleContent";
import NavigationBar from "./NavigationBar";

const TitlePage = (props) => {
  return (
    <section id="home">
      <TitleContent />
      <NavigationBar />
    </section>
  );
};

export default TitlePage;
