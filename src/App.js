import "./App.css";
import "./components/ProjectCards/ProjectCards.css";
import HeadingCard from "./components/HeadingCard/HeadingCard";
import ProjectCard from "./components/ProjectCards/ProjectCard";
import { React, useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Ben Leong - Portfolio";
  }, []);

  return <div className="App">yo</div>;
}

export default App;
