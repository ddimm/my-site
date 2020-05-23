import React from "react";
import Navbar from "react-bootstrap/Navbar";
import AboutSetion from "./AboutSection";
import ProjectsTable from "./ProjectsTable";

function HeaderNav() {
  return (
    <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
      <Navbar.Brand>David Dimmett</Navbar.Brand>
    </Navbar>
  );
}

function App() {
  return (
    <div>
      <HeaderNav />

      <AboutSetion />
      <ProjectsTable />
    </div>
  );
}

export default App;
