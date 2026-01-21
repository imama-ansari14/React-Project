import React from 'react';
import { Card } from 'react-bootstrap';

const PortfolioCard = ({ item }) => {
  return (
    <Card 
      className="portfolio-card h-100 border-0 shadow-sm"
      style={{ 
        backgroundColor: item.bgColor,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
      }}
    >
      <div className="portfolio-image-wrapper" style={{ overflow: 'hidden', height: '300px' }}>
        <Card.Img 
          variant="top" 
          src={item.image} 
          alt={item.title}
          style={{ 
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          className="portfolio-image"
        />
      </div>
      <Card.Body className="text-center py-4">
        <Card.Title 
          className="portfolio-card-title mb-0"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.25rem',
            fontStyle: 'italic',
            fontWeight: '400',
            color: '#333'
          }}
        >
          {item.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PortfolioCard;