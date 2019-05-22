import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { PDFObject } from "react-pdfobject";
import "./Resume.css";

class Resume extends Component {
  render() {
    return <PDFObject url="LarryLiuResume.pdf" />;
  }
}

export default Resume;
