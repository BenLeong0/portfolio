import "./App.css";
import { React, useEffect, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import TitlePage from "./components/TitlePage/TitlePage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Qualifications from "./components/Qualifications/Qualifications";

function App() {
  const [componentScrollHeights, setComponentScrollHeights] = useState([
    0,
    0,
    0,
  ]);

  useEffect(() => {
    document.title = "Ben Leong - Portfolio";
    setComponentScrollHeights([
      document.getElementById("about").offsetTop - 100,
      document.getElementById("projects").offsetTop - 100,
      document.getElementById("qualifications").offsetTop - 100,
    ]);
  }, []);

  const [currentComponent, setCurrentComponent] = useState("home");

  useScrollPosition(
    ({ currPos }) => {
      if (-currPos.y < componentScrollHeights[0]) {
        setCurrentComponent("home");
      } else if (-currPos.y < componentScrollHeights[1]) {
        setCurrentComponent("about");
      } else if (-currPos.y < componentScrollHeights[2]) {
        setCurrentComponent("projects");
      } else {
        setCurrentComponent("qualifications");
      }
    },
    [currentComponent]
  );

  return (
    <div className="App">
      <TitlePage currentComponent={currentComponent} />
      <About />
      <Projects />
      <Qualifications />
    </div>
  );
}

export default App;
