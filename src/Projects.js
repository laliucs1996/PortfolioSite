import React, { Component } from "react";
import "./App.css";
import "./Projects.css";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";
// import Test2 from "./Test2.js";

class Projects extends Component {
  state = {
    text:
      "A Movies and TV Series reviewing/rating website modeled after Rotten Tomatoes. The website was made using Java, HTML, MySQL, CSS and Javascript.",
    bgColorA: "#0f0f0f ",
    textColorA: "white",
    bgColorB: "#0f0f0f ",
    textColorB: "#61dafb",
    bgColorC: "#0f0f0f ",
    textColorC: "white",
    image: "media/Spruce.png",
    visibility: "visible",
    visibilityA: "hidden",
    marginright: "15vh",
    size: "90%",
    site: "https://github.com/laliucs1996/Spruce",
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
              <Nav.Link href="#/">
                <h5>Home</h5>
              </Nav.Link>
              {/* <Nav.Link href="/aboutMe">
                <h5>About Me</h5>
              </Nav.Link> */}
              <Nav.Link href="#/resume">
                <h5>Resume</h5>
              </Nav.Link>
              <Nav.Link href="#/projects">
                <h5
                  style={{
                    color: this.state.color
                  }}
                >
                  Projects
                </h5>
              </Nav.Link>
              <Nav.Link />
              <SocialIcon url="https://github.com/laliucs1996" />
              <Nav.Link />
              <SocialIcon url="https://www.linkedin.com/in/larry-liu-d1996" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div
          className="topbar"
          style={{
            visibility: this.state.visibility
          }}
        >
          <div className="cbar" onClick={this.handleClickBar}>
            &#60;
          </div>
          <div className="title">Featured Projects</div>

          <div
            className="ProCon"
            style={{
              backgroundColor: this.state.bgColorB,
              color: this.state.textColorB
            }}
            onClick={this.handleClickB}
          >
            Spruce
          </div>
          <br />
          <div
            className="ProCon2"
            style={{
              backgroundColor: this.state.bgColorC,
              color: this.state.textColorC
            }}
            onClick={this.handleClickC}
          >
            Python Based Compiler
          </div>
          <br />
          <div
            className="ProCon1"
            style={{
              backgroundColor: this.state.bgColorA,
              color: this.state.textColorA
            }}
            onClick={this.handleClickA}
          >
            Aletheia
          </div>
        </div>
        <div
          className="topbarA"
          style={{
            visibility: this.state.visibilityA
          }}
        >
          <div className="cbarA" onClick={this.handleClickBarA}>
            &#62;
          </div>
        </div>

        <div
          className="container"
          style={{
            marginRight: this.state.marginright
          }}
        >
          <div className="projContent">
            <img
              className="img"
              alt=""
              src={this.state.image}
              style={{
                width: this.state.size
              }}
            />
            <div className="desc">{this.state.text}</div>
            <a className="link" href={this.state.site}>
              View Project
            </a>
          </div>
        </div>
      </div>
    );
  }
  handleClickA = () => {
    this.setState({
      text:
        "Aletheia is a work in progress, it will feature a chat bot that talks about many characters from the Greek mythos.",
      bgColorB: "#0f0f0f ",
      textColorB: "white",
      bgColorA: "#0f0f0f ",
      textColorA: "#61dafb",
      bgColorC: "#0f0f0f ",
      textColorC: "white",
      image: "media/soontm.jpg",
      site: "#"
    });
  };
  handleClickB = () => {
    this.setState({
      text:
        "A Movie and TV Series reviewing/rating website modeled after Rotten Tomatoes. The website was made using Java, HTML, MySQL, CSS and Javascript.",
      bgColorA: "#0f0f0f ",
      textColorA: "white",
      bgColorB: "#0f0f0f ",
      textColorB: "#61dafb",
      bgColorC: "#0f0f0f ",
      textColorC: "white",
      image: "media/Spruce.png",
      site: "https://github.com/laliucs1996/Spruce"
    });
  };
  handleClickC = () => {
    this.setState({
      text:
        "A Python based parser and compiler that uses the library, PLY (Python Lex-Yacc) to parse code blocks and traverse them as a tree to deliver the code result.",
      bgColorA: "#0f0f0f ",
      textColorA: "white",
      bgColorC: "#0f0f0f ",
      textColorC: "#61dafb",
      bgColorB: "#0f0f0f ",
      textColorB: "white",
      image: "media/CompThings.png",
      site: "https://github.com/laliucs1996/Python-Based-Compiler"
    });
  };
  handleClickBar = () => {
    this.setState({
      visibility: "hidden",
      visibilityA: "visible",
      marginright: "35vh",
      size: "90%"
    });
  };

  handleClickBarA = () => {
    this.setState({
      visibility: "visible",
      visibilityA: "hidden",
      marginright: "15vh",
      size: "75%"
    });
  };
  componentDidMount() {
    document.title = "My Projects!";
  }

  // onclickLeft() {
  //   if (int != 0) {
  //     int--;
  //   } else {
  //     int = 3;
  //   }
  //   document.getElementById("s" + int).style("visibility: visible");
  // }

  // onclickRight() {
  //   if (int != 3) {
  //     int++;
  //   } else {
  //     int = 0;
  //   }
  //   document.getElementById("s" + int).style("visibility: visible");
  // }
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
  }
}

export default Projects;
