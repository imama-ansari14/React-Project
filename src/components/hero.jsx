import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
// ✅ Imported images (GOOD)
import leaf from "/public/images/leaf.png";
import leaf2 from "/public/images/leaf2.png";
import cycle from "/public/images/cycle.png";
import tree from "/public/images/tree.png";
import bird from "/public/images/bird.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Decorative Elements */}
      <div className="decorative-clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
      </div>

      <div className="decorative-dots">
        <span className="dot dot-1"></span>
        <span className="dot dot-2"></span>
        <span className="dot dot-3"></span>
      </div>

      <div className="decorative-leaves">
        <div className="leaf leaf-1">
          <img src={leaf} alt="leaf" />
        </div>
        <div className="leaf leaf-2">
          <img src={leaf2} alt="leaf" />
        </div>
        <div className="leaf leaf-3">
          <img src={leaf2} alt="leaf" />
        </div>
      </div>

      <Container>
        <Row className="align-items-center min-vh-100">
          {/* Left Illustration */}
          <Col lg={3} md={4} className="d-none d-md-block">
            <img
              src={cycle}
              alt="Couple on bike"
              className="img-fluid"
              style={{ maxWidth: "280px" }}
            />
          </Col>

          {/* Center Content */}
          <Col lg={6} md={4} className="text-center">
            <div className="hero-content">
              <div className="hero-icon mb-3">
                <img src={leaf} alt="icon" width="50" />
              </div>

              <h1 className="hero-title mb-3">
                Marée<span className="butterfly-accent"></span>
              </h1>

              <p className="hero-subtitle mb-4">
                Welcome to Marée, a brand new illustration & design portfolio
                just
                <br />
                waiting for your work to start populating its templates!
              </p>

              <Button className="btn-purchase">PURCHASE</Button>
            </div>
          </Col>

          {/* Right Illustration */}
          <Col lg={3} md={4} className="d-none d-md-block">
            <img
              src={tree}
              alt="Trees"
              className="img-fluid"
              style={{ maxWidth: "220px" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Corner Icon */}
      <div className="corner-icon">
        <img src={bird} alt="Bird" width="60" />
      </div>
    </section>
  );
};

export default Hero;
