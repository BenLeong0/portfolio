import "./App.css";
import { React, useEffect, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import TitlePage from "./components/TitlePage/TitlePage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  const [componentScrollHeights, setComponentScrollHeights] = useState([
    0,
    0,
    0,
  ]);

  useEffect(() => {
    document.title = "Ben Leong - Portfolio";
    setComponentScrollHeights([
      document.getElementById("about").offsetTop - 130,
      document.getElementById("projects").offsetTop - 130,
      document.getElementById("skills").offsetTop - 130,
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
        setCurrentComponent("skills");
      }
    },
    [currentComponent]
  );

  return (
    <div className="App">
      <TitlePage currentComponent={currentComponent} />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
