import React, { Component } from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";

class Projects extends Component {
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
              <Nav.Link />
              <SocialIcon url="https://github.com/laliucs1996" />
              <Nav.Link />
              <SocialIcon url="https://www.linkedin.com/in/larry-liu-d1996" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="title">Featured Projects:</div>
        <div className="projstyleMainA">
          <div className="p1">
            <img src="media/sprucetemp.png" />
          </div>
          <div className="p15" />
        </div>
        <div className="projstyleMain">
          <div className="p1">
            <img src="media/powerless.jpg" />
          </div>
          <div className="p15" />
        </div>
        <div className="projstyleMain">
          <div className="p1">
            <img src="media/powerless.jpg" />
          </div>
          <div className="p15" />
        </div>
        <div className="projstyleMain">
          <div className="p1">
            <img src="media/powerless.jpg" />
          </div>
          <div className="p15" />
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.title = "My Projects!";
  }
  componentWillMount() {
    document.body.style.width = "null";
    document.body.style.height = "null";
    document.body.style.overflow = "null";
    document.body.style.overflowY = "scroll";
    document.body.style.overflowx = "hidden";
  }
  componentWillUnmount() {
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
    document.html.style.overlow = "hidden";
  }
}

export default Projects;
