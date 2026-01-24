import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar bg={theme === "light" ? "light" : "dark"} data-bs-theme={theme}>
        <Container>
          <Navbar.Brand href="#home">Mar'ee</Navbar.Brand>
          <Nav
            className="me-auto justify-content-center gap-4"
            style={{ width: "100%" }}
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Gallery</Nav.Link>
            <Nav.Link href="#slider">Slider</Nav.Link>
            <Nav.Link href="#print">Portfolio Printerest</Nav.Link>
          </Nav>
          <button
            onClick={toggleTheme}
            className="btn btn-outline-secondary"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
