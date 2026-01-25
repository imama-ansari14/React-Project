import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <div className="text-center">
          <p className="footer-text mb-0">
            © 2024 Marée Portfolio. Created for educational purposes.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;