import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isFavorite, onClick }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleButtonClick = useCallback(() => {
    setFavorite((prevFavorite) => !prevFavorite);
    onClick();
  }, [onClick]);

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
};

export default PhotoFavButton;
