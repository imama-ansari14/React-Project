import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      bg="transparent"
      className="py-3 position-absolute w-100"
      style={{ zIndex: 1000 }}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/150x40/FF6B6B/FFFFFF?text=envato+market"
            alt="Envato Market"
            height="24"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Button
          className="btn-buy-now"
          style={{
            backgroundColor: "#A8D08D",
            border: "none",
            padding: "8px 24px",
            fontSize: "14px",
            fontWeight: "500",
            borderRadius: "4px",
            color: "white",
          }}
        >
          Buy now
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
