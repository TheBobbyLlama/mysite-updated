import { Col } from "react-bootstrap";

import "./FooterLink.css";

export default function FooterLink({ className, name, image }) {
  return (
    <Col sm={1} md={1} className={className}>
      <div className={name}>
        <a href="#">
          <img className="img-responsive" src={image} />
        </a>
      </div>
    </Col>
  );
}
