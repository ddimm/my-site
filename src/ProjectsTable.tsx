import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function ProjectsTable() {
  const [ready, setReady] = useState(false);
  const [repoInfo, setRepoInfo] = useState([]);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    fetch("https://6bcf8c6cd288dbac7367833f912a9dc2.balena-devices.com/")
      .then((respObject: Response) => {
        return respObject.json();
      })
      .then((tableData: any) => {
        setRepoInfo(tableData);
        setReady(true);
      })
      .catch((err: Error) => {
        console.log(err.message);
        setFailed(true);
      });
  }, []);
  if (failed) {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1 id="projects">Projects</h1>
            <hr />
            <h3>Some things I'm working on, or have worked on.</h3>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p>couldn't load projects table</p>
          </Col>
        </Row>
      </Container>
    );
  } else if (ready) {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1 id="projects">Projects</h1>
            <hr />
            <p className="lead">
              Some things I'm working on, or have worked on.
            </p>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Links</th>
                  <th scope="col">Language</th>
                  <th scope="col">Size</th>
                  <th scope="col">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {repoInfo.map((repo: RepoInfo) => {
                  return (
                    <tr key={repo.name} id={repo.name}>
                      <th>{repo.name}</th>
                      <td>{repo.description}</td>
                      <td>
                        <Button
                          onClick={() => {
                            window.open(repo.html_url, "_blank");
                          }}
                          variant="link"
                        >
                          Repo
                        </Button>
                        {repo.homepage ? (
                          <Button
                            variant="link"
                            onClick={() => {
                              window.open(repo.homepage, "_blank");
                            }}
                          >
                            homepage
                          </Button>
                        ) : (
                          <React.Fragment />
                        )}
                      </td>
                      <td>{repo.language}</td>
                      <td>{repo.size}</td>
                      <td>
                        {repo.updated_at.substr(
                          0,
                          repo.updated_at.indexOf("T")
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1 id="projects">Projects</h1>
            <hr />
            <h3>Some things I'm working on, or have worked on.</h3>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Spinner animation="border" role="status">
              <span className="sr-only">loading project information</span>
            </Spinner>
          </Col>
        </Row>
      </Container>
    );
  }
}

interface RepoInfo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
  };
  html_url: string;
  size: number;
  updated_at: string;
  language: string;
  description: string;
  homepage: string;
}
