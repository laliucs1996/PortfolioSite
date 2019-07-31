import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home.js";
import { HashRouter, Route } from "react-router-dom";
import AboutMe from "./AboutMe.js";
import Resume from "./Resume.js";
import Projects from "./Projects.js";

function App() {
  return (
    <HashRouter baseName="/Larry">
      <Route path={"/"} exact component={Home} />
      <Route path={"/aboutMe"} component={AboutMe} />
      <Route path={"/resume"} component={Resume} />
      <Route path={"/projects"} component={Projects} />
    </HashRouter>
  );
}

export default App;
