import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{fontSize:"1rem"}}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{fontSize:"1rem"}}>CSS</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize:"1rem"}}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize:"1rem"}}>NodeJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize:"1rem"}}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize:"1rem"}}>MongoDB</p>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize:"1rem"}}>Git</p>
      </Col>
     
    </Row>
  );
}

export default Techstack;
