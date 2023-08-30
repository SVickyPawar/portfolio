import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vivek Pawar  </span>
            from <span className="purple"> Pune, India.</span>
            <br />I am an enthusiastic frontend developer, like to build beautiful websites.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to escape from the problem is to face them"{" "}
          </p>
          <footer className="blockquote-footer">Vivek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
