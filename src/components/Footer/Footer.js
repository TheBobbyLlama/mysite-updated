import { Container, Row, Col } from "react-bootstrap";

import FooterLink from "../FooterLink/FooterLink";

import facebookSVG from "../../assets/images/facebook.svg";
import linkedinSVG from "../../assets/images/linkedin.svg";
import pinterestSVG from "../../assets/images/pinterest.svg";
import emailSVG from "../../assets/images/email.svg";
import "./Footer.css";

const footerInfo = [
  {
    className: "offset-sm-4 offset-md-4",
    name: "facebook",
    image: facebookSVG,
  },
  {
    name: "linkedin",
    image: linkedinSVG,
  },
  {
    name: "pinterest",
    image: pinterestSVG,
  },
  {
    name: "email-icon",
    image: emailSVG,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="media-links">
          {footerInfo.map((item) => (
            <FooterLink key={item.name} {...item} />
          ))}
        </Row>

        <Row>
          <Col sm={6} md={6} className="text-end">
            <div className="personal-contact phone">
              <h4>Phone: XXXXXX</h4>
            </div>
          </Col>

          <Col sm={6} md={6} className="text-start">
            <div className="personal-contact email-personal-contact">
              <h4>Email: XXXXX@gmail.com</h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={4} md={4} className="text-center">
            <div className="company-information">
              <h3>XXXX</h3>
              <h4>Copyright &copy; 2021</h4>
              <h4>NY</h4>
            </div>
          </Col>

          <Col sm={2} md={2} className="text-center">
            <div className="home-footer">
              <h4>
                <a href="#">Home</a>
              </h4>
            </div>
          </Col>

          <Col sm={2} md={2} className="text-center">
            <div className="portfolio-footer">
              <h4>
                <a href="#">Portfolio</a>
              </h4>
              <ul>
                <li>
                  <a href="#">Project1</a>
                </li>
                <li>
                  <a href="#">Project2</a>
                </li>
                <li>
                  <a href="#">Project3</a>
                </li>
                <li>
                  <a href="#">See All</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col sm={2} md={2} className="text-center">
            <div className="resume-footer">
              <h4>
                <a href="#">Resume</a>
              </h4>
              <ul>
                <li>
                  <a href="#">Download</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col sm={2} md={2} className="text-center">
            <div className="contact-footer">
              <h4>
                <a href="#">Contact</a>
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
