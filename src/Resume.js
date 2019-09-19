import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { PDFObject } from "react-pdfobject";
import "./Resume.css";

class Resume extends Component {
  componentDidMount() {
    document.title = "My Resume!";
  }
  render() {
    return <PDFObject url="media/LarryLiuRésumé.pdf" />;
  }
}

export default Resume;
