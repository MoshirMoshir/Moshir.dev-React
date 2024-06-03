import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './GameCard.css'; // Import the custom CSS

interface GameCardProps {
  title: string;
  description: string;
  image?: string; // Make image optional
  link: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, image, link }) => {
  const [imgError, setImgError] = useState<boolean>(false);

  useEffect(() => {
    // Reset image error state when the image prop changes
    setImgError(false);
  }, [image]);

  const formatDescription = (text: string) => {
    return text.split('\n').map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <Card className="h-100" style={{ marginBottom: '1rem' }}>
      {image && !imgError && (
        <Card.Img
          variant="top"
          src={image}
          alt=""
          onError={() => setImgError(true)} // Hide the image on error
          className="rounded card-img-top" // Add Bootstrap's rounded class and custom class
        />
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{formatDescription(description)}</Card.Text>
        <Button variant="primary" href={link} target="_blank" className="mt-auto">Play Now</Button>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
