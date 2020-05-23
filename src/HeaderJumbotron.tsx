import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function HeaderJumbotron() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="text-center">Welcome!</h1>
        <hr />
        <p className="lead text-center">
          Here you'll find information about me and my current projects.
        </p>
      </Container>
    </Jumbotron>
  );
}
