import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";
import { PDFObject } from "react-pdfobject";
class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="Home">
        <Navbar fixed="top" bg="light" expand="sm">
          <Navbar.Brand href="/">
            <h1>Larry Liu</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/aboutMe">
                <h5>About Me</h5>
              </Nav.Link>
              <Nav.Link>
                <h5 onClick={this.handleShow}>Resume</h5>
                <Modal
                  ClassName="custom-r"
                  show={this.state.show}
                  onHide={this.handleClose}
                  scrollable="false"
                  centered="true"
                >
                  <Modal.Header closeButton />
                  <Modal.Body>
                    <PDFObject url="LarryLiuResume.pdf" />
                  </Modal.Body>
                  <Modal.Footer />
                </Modal>
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
  componentDidMount() {
    document.title = "My Home!";
  }
}

export default Home;
