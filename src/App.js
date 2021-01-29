import "./App.css";
import "./components/ProjectCards/ProjectCards.css";
import HeadingCard from "./components/HeadingCard/HeadingCard";
import ProjectCard from "./components/ProjectCards/ProjectCard";

function App() {
  const projects = require("./components/ProjectCards/projects.json").items;
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
