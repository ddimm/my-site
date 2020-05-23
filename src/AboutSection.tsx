import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
const resume_spring_2020 = require("./resume_spring_2020.pdf");
export default function AboutSection() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 id="about">About</h1>
          <hr />
          <p className="lead">
            I'm David, a computer science major in the University of Virginia
            School of Engineering and Applied Science. I have experience in a
            few areas, including robotics and web development, and I'm always
            looking to learn more!
          </p>
          <ButtonGroup role="group" size="sm" aria-label="social_media">
            <Button href="mailto:dcd2sg@virginia.edu" variant="info">
              Email
            </Button>
            <Button
              onClick={() => {
                window.open("https://github.com/ddimm", "_blank");
              }}
              variant="info"
            >
              Github
            </Button>
            <Button
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/david-dimmett-537b25188/",
                  "_blank"
                );
              }}
              variant="info"
            >
              LinkedIn
            </Button>
            <Button
              onClick={() => {
                window.open(resume_spring_2020, "_blank");
              }}
              variant="info"
            >
              Resume
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}
