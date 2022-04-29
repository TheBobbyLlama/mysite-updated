import { Row, Col } from "react-bootstrap";

import "./ProjectCard.css";

export default function ProjectCard({ title, description, tag }) {
  return (
    <Col sm={12} md={6} lg={4} className="text-center">
      <div className={tag + "-project project-card"}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Row>
          <Col sm={4} md={4} className="offset-sm-4 offset-md-4">
            <div className="project-more-info">
              <a className="btn btn-default btn-border" href="#">
                More
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
