// PhotoFavButton.js
import React from 'react';
import { useAppContext, actions } from '../context';
import useApplicationData from '../hooks/useApplicationData';


const PhotoFavButton = ({ isFavorite, photoId }) => {
  const { state, dispatch } = useAppContext();

  const toggleFavorite = () => {
    dispatch({ type: actions.TOGGLE_FAVORITE, payload: photoId });
  };

  return (
    <button
      className={`photo-list__fav-icon ${isFavorite ? 'active' : ''}`}
      onClick={toggleFavorite}
    >
      {/* Render your favorite icon SVG */}
    </button>
  );
};

export default PhotoFavButton;
