import { Container, Row, Col } from "react-bootstrap";

import logo from "../../assets/images/logo.svg";
import "./NavHeader.css";

function generateLinkItem(component, key = 0) {
  return <li key={key}>{component}</li>;
}

export default function NavHeader({ children }) {
  let navButtons = null;

  if (children) {
    if (children.length) {
      navButtons = children.map((child, index) => {
        return generateLinkItem(child, index);
      });
    } else {
      navButtons = generateLinkItem(children);
    }
  }
  return (
    <header className="navigation">
      <Container fluid>
        <Row>
          <Col xs={1} sm={1} md={1} lg={1} className="text-center">
            <div className="logo">
              <a href="index.html">
                <img src={logo} alt="" />
              </a>
            </div>
          </Col>

          <Col xs={11} sm={11} md={11} lg={11} className="text-right">
            <nav className="primary-nav">
              <ul>{navButtons}</ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
