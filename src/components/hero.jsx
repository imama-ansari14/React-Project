import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

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
          <img src="/images/leaf.png" alt="leaf" />
        </div>
        <div className="leaf leaf-2">
          <img src="/images/leaf2.png" alt="leaf" />
        </div>
        <div className="leaf leaf-3">
          <img src="/images/leaf2.png" alt="leaf" />
        </div>
      </div>

      <Container>
        <Row className="align-items-center min-vh-100">
          {/* Left Illustration */}
          <Col lg={3} md={4} className="d-none d-md-block">
            <div className="hero-illustration-left">
              <img
                src="/images/cycle.png"
                alt="Couple on bike"
                className="img-fluid"
                style={{ maxWidth: "280px" }}
              />
            </div>
          </Col>

          {/* Center Content */}
          <Col lg={6} md={4} className="text-center">
            <div className="hero-content">
              <div className="hero-icon mb-3">
                <img
                  src="/images/leaf.png"
                  alt="Butterfly"
                  style={{ width: "50px" }}
                />
              </div>

              <h1 className="hero-title mb-3">
                Marée<span className="butterfly-accent">🦋</span>
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
            <div className="hero-illustration-right">
              <img
                src="/images/tree.png"
                alt="Trees"
                className="img-fluid"
                style={{ maxWidth: "220px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Top Right Corner Icon */}
      <div className="corner-icon">
        <img src="/images/bird.png" alt="Bird" style={{ width: "60px" }} />
      </div>
    </section>
  );
};

export default Hero;
