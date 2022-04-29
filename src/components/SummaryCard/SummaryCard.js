import { Col } from "react-bootstrap";

import "./SummaryCard.css";

export default function SummaryCard({ icon, header, text }) {
  return (
    <div className="summaryCard">
      <Col sm={1} md={1}>
        <div className="development-img">
          <img className="img-responsive" src={icon} alt="" />
        </div>
      </Col>

      <Col sm={4} md={4}>
        <div>
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
      </Col>
    </div>
  );
}
