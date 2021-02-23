import "./App.css";
import { React, useEffect } from "react";

import TitlePage from "./components/TitlePage/TitlePage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Qualifications from "./components/Qualifications/Qualifications";

function App() {
  useEffect(() => {
    document.title = "Ben Leong - Portfolio";
  }, []);

  return (
    <div className="App">
      <TitlePage />
      <About />
      <Projects />
      <Qualifications />
    </div>
  );
}

export default App;
