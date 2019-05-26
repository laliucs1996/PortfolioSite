import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";

class AboutMe extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar fixed="top" bg="light" expand="sm">
          <Navbar.Brand href="/">
            <h1>Larry Liu</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/aboutMe">
                <h5>About Me</h5>
              </Nav.Link>
              <Nav.Link href="/resume">
                <h5>Resume</h5>
              </Nav.Link>
              <Nav.Link href="/projects">
                <h5>Projects</h5>
              </Nav.Link>
              <Nav.Link />
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
  componentDidMount() {
    document.title = "About Me!";
  }
}

export default AboutMe;
