import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import PortfolioCard from './PortfolioCard';
// import { portfolioItems } from '../data/portfolioData';

const PortfolioGrid = () => {
  return (
    <section className="portfolio-section py-5" id="portfolio">
      <Container>
        <Row className="g-4">
          {portfolioItems.map((item) => (
            <Col lg={4} md={6} key={item.id}>
              <PortfolioCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioGrid;