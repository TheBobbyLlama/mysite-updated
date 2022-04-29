import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "../ProjectCard/ProjectCard";

import "./Projects.css";

const projectInfo = [
  {
    tag: "luvtalk",
    title: "LUV TALK Website",
    description:
      "Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.",
  },
  {
    tag: "personal-website",
    title: "Personal Website",
    description:
      "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.",
  },
  {
    tag: "strike-zone",
    title: "Strike Zone Analysis",
    description:
      "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <Container fluid>
        <Row>
          <Col sm={12} md={12} className="text-center">
            <div className="projects-header">
              <h1>Projects and Portfolio</h1>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={12} className="text-center">
            <div className="projects-header-quote">
              <h3>Sharing my endeavors and passions...</h3>
            </div>
          </Col>
        </Row>

        <Row>
          {projectInfo.map((project) => (
            <ProjectCard {...project} />
          ))}
        </Row>

        <Row>
          <Col
            sm={4}
            md={4}
            className="offset-sm-4 offset-md-4 see-more-button text-center"
          >
            <a className="btn btn-default btn-border" href="#">
              More Projects
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
