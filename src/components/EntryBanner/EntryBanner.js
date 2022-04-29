import { Container, Row, Col } from "react-bootstrap";

import "./EntryBanner.css";

export default function EntryBanner() {
  return (
    <section className="main">
      <Container fluid>
        <Row>
          <div className="entry-banner text-center">
            <h1 id="hello">Hello, I'm</h1>
            <h1 id="name">XXXX</h1>
            <h1 id="person-description">
              UI Developer. UX Designer. Problem Solver.
            </h1>
          </div>
        </Row>

        <Row className="text-center banner-buttons">
          <Col sm={2} md={2} className="offset-sm-4 offset-md-4 text-end">
            <a className="btn btn-default btn-border" href="#about">
              Info
            </a>
          </Col>

          <Col sm={2} md={2}>
            <a className="btn btn-default btn-border" href="#projects">
              Portfolio
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
