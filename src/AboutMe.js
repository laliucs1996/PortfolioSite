import React, { Component } from "react";
import "./App.css";
import "./AbMe.css";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";

class AboutMe extends Component {
  state = {
    color: "#61dafb"
  };
  render() {
    return (
      <div className="Home">
        <Navbar fixed="top" bg="light" expand="sm">
          <Navbar.Brand href="#/">
            <h1>Larry Liu</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <Nav.Link href="/">
                <h5>Home</h5>
              </Nav.Link> */}
              <Nav.Link href="#/">
                <h5
                  style={{
                    color: this.state.color
                  }}
                >
                  Home
                </h5>
              </Nav.Link>
              <Nav.Link href="#/resume">
                <h5>Resume</h5>
              </Nav.Link>
              <Nav.Link href="#/projects">
                <h5>Projects</h5>
              </Nav.Link>
              <Nav.Link />
              <SocialIcon url="https://github.com/laliucs1996" />
              <Nav.Link />
              <SocialIcon url="https://www.linkedin.com/in/larry-liu-d1996" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <header className="AbMe">
          <img className="ppic" src="media/Profile.jpg" alt="Profile" />
          <p className="descMe">
            Hey! My name is Larry, Welcome to My Website! <br /> I'm a software
            developer interested in create apps and maintaining a functional
            backend while finding and learning additional tools to enhance user
            experience or to create new sparkly effects. My favorite hobby is
            reading myths from various cultures and visualizing these stories in
            my head. Myths tell me of the way people lived and understood the
            natural world before me and creates and interesting image for me to
            think about. Two of my favorite myths is "The Odyssey" from Greek
            Mythology and the story about Odin's quest for wisdom in Norse
            Mythology. I also enjoy eating and always take the chance to try
            something delicious when given the opportunity. When you don't see
            me reading, you'll see me eating!
          </p>
        </header>
      </div>
    );
  }
  componentDidMount() {
    document.title = "Home";
  }
}

export default AboutMe;
