import { Col } from "react-bootstrap";

import "./SummaryCard.css";

export default function SummaryCard({ icon, header, text }) {
  return (
    <Col sm={12} md={6} className="summaryCard">
      <Col sm={12} md={2}>
        <div className="development-img">
          <img className="img-responsive" src={icon} alt="" />
        </div>
      </Col>

      <Col sm={12} md={9} className="offset-md-1">
        <div>
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
      </Col>
    </Col>
  );
}
