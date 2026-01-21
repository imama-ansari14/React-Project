import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer py-4" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <div className="text-center">
          <p className="mb-0" style={{ color: '#6c757d', fontSize: '0.9rem' }}>
            © 2024 Marée Portfolio. Created for educational purposes.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;