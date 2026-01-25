import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// ✅ Import image properly
import cycle from "/public/images/cycle.png";

const BottomCTA = () => {
  return (
    <section className="bottom-cta-section py-5 position-relative">
      {/* Decorative Elements */}
      <div className="decorative-leaves-bottom">
        <div className="leaf-bottom leaf-bottom-1"></div>
        <div className="leaf-bottom leaf-bottom-2"></div>
      </div>

      <div className="decorative-dots-bottom">
        <span className="dot-bottom dot-bottom-1"></span>
        <span className="dot-bottom dot-bottom-2"></span>
      </div>

      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <h2 className="cta-title mb-3">
              Your brand new folio with a professional layout
              <br />
              collection and quite a cheerful{" "}
              <em style={{ fontFamily: "'Playfair Display', serif" }}>
                personality!
              </em>
            </h2>

            <Button className="btn-purchase">PURCHASE</Button>
          </Col>

          <Col lg={6} className="text-center">
            <div className="cta-illustration">
              <img
                src={cycle}
                alt="Person with guitar"
                className="img-fluid"
                style={{ maxWidth: "350px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Decorative Hearts */}
      <div className="floating-hearts">
        <div className="heart heart-1">❤️</div>
        <div className="heart heart-2">🦋</div>
        <div className="heart heart-3">❤️</div>
        <div className="heart heart-4">🦋</div>
      </div>
    </section>
  );
};

export default BottomCTA;
