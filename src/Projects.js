import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";
function Projects() {
  return (
    <div className="Projects">
      <Navbar fixed="top" bg="light" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">
              <h5>Home</h5>
            </Nav.Link>
            <Nav.Link href="/aboutMe">
              <h5>About Me</h5>
            </Nav.Link>
            <Nav.Link href="/resume">
              <h5>Resume</h5>
            </Nav.Link>
            <Nav.Link href="/projects">
              <h5>Projects</h5>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <SocialIcon url="https://github.com/laliucs1996" />
            <Nav.Link />
            <SocialIcon url="https://www.linkedin.com/in/larry-liu-d1996" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Projects;
