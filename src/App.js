import "./App.css";
import { React, useEffect } from "react";

import TitlePage from "./components/TitlePage/TitlePage";

function App() {
  useEffect(() => {
    document.title = "Ben Leong - Portfolio";
  }, []);

  return (
    <div className="App">
      <TitlePage />
    </div>
  );
}

export default App;
