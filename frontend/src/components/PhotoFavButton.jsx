import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import FavIcon from './FavIcon';

const PhotoFavButton = ({ isFavorite, onClick, onFavChange }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleButtonClick = useCallback(() => {
    const newFavorite = !favorite;
    setFavorite(newFavorite);
    onClick();
    onFavChange(newFavorite); // Notify parent about the change
  }, [favorite, onClick, onFavChange]);

  return (
    <div
      className={`photo-list__fav-icon ${favorite ? 'active' : ''}`}
      role="button"
      tabIndex={0}
      onClick={handleButtonClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleButtonClick();
        }
      }}
    >
      <FavIcon selected={favorite} /> {/* Pass selected prop to FavIcon */}
    </div>
  );
};

PhotoFavButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onFavChange: PropTypes.func.isRequired, // New prop
};

export default PhotoFavButton;
