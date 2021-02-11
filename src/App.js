import "./App.css";
import "./components/ProjectCards/ProjectCards.css";
import HeadingCard from "./components/HeadingCard/HeadingCard";
import ProjectCard from "./components/ProjectCards/ProjectCard";
import { React, useEffect } from "react";

function App() {
  const projects = require("./components/ProjectCards/projects.json").items;

  useEffect(() => {
    document.title = "Ben Leong - Portfolio";
  }, []);

  return (
    <div className="App">
      <HeadingCard />
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default App;
