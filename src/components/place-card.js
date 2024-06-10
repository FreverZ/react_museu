import React from 'react';
import PropTypes from 'prop-types';
import OutlineButton from './outline-button';
import './place-card.css';

const PlaceCard = (props) => {
  const { imageAlt, image, city, description, redirectTo } = props;

  const handleButtonClick = () => {
    // Redirecionar para a rota de destino ao clicar no botão
    window.location.href = redirectTo;
  };

  return (
    <div className="place-card-container">
      <img
        alt={imageAlt}
        src={image}
        className="place-card-image"
      />
      <div className="place-card-container1">
        <span className="place-card-text">{city}</span>
        <span className="place-card-text1">{description}</span>
        <OutlineButton button1="Descobrir mais" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

PlaceCard.defaultProps = {
  image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  imageAlt: 'image',
  city: 'City Name',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  redirectTo: '/museu1', // Rota de destino padrão
};

PlaceCard.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
  redirectTo: PropTypes.string, // Propriedade para a rota de destino
};

export default PlaceCard;