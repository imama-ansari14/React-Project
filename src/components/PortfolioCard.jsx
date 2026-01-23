import React from "react";
import { Card } from "react-bootstrap";

const PortfolioCard = ({ item }) => {
  return (
    <Card className="portfolio-card h-100 border-0 shadow-sm">
      {/* Image Wrapper */}
      <div className="portfolio-image-wrapper">
        <Card.Img
          variant="top"
          src={item.image}
          alt={item.title}
          className="portfolio-image"
        />
      </div>

      {/* Text */}
      <Card.Body className="text-center py-4">
        <Card.Title className="portfolio-card-title mb-0">
          {item.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PortfolioCard;
