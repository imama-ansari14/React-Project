import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import reactLogo from "../assets/react.svg";

function NavScrollExample() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid>
        {/* React Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={reactLogo}
            alt="React Logo"
            width="30"
            height="30"
            className="me-2"
          />
          React
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* Search bar (LEFT, after logo) */}
          <Form className="d-flex ms-3 me-4" style={{ maxWidth: "220px" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>

          {/* Center links */}
          <Nav className="me-auto">
            <Nav.Link href="#">Learn</Nav.Link>
            <Nav.Link href="#">Reference</Nav.Link>
            <Nav.Link href="#">Community</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>

          {/* Right icons */}
          <Nav className="align-items-center">
            <Nav.Link href="#" title="Theme">
              🌙
            </Nav.Link>
            <Nav.Link href="#" title="Language">
              🌐
            </Nav.Link>
            <Nav.Link href="#" title="GitHub">
              🐙
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
