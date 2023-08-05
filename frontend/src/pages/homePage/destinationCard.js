import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.imageUrl} alt={destination.name} className="destination-image" />
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
    </div>
  );
};

export default DestinationCard;