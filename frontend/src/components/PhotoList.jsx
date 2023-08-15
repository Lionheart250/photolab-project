import React from 'react';
import PropTypes from 'prop-types';
import PhotoFavButton from './PhotoFavButton';
import useApplicationData from '../hooks/useApplicationData';

import '../styles/PhotoList.scss';

const PhotoList = ({ photos }) => {
  return (
    <div className="photo-list">
      {photos.map((photoData) => (
        <div key={photoData.id} className="photo-list__item">
          <div className="photo-wrapper">
            <img src={photoData.urls.regular} alt={`Photograph by ${photoData.user.username}`} className="photo" />
            <PhotoFavButton isFavorite={photoData.isFavorite} onClick={() => {}} />
          </div>
          <div className="photo-details">
            <div className="location">
              {photoData.location.city}, {photoData.location.country}
            </div>
            <div className="username">{photoData.user.username}</div>
            <img src={photoData.user.profile} alt={`Profile of ${photoData.user.username}`} className="profile-pic" />
          </div>
        </div>
      ))}
    </div>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }).isRequired,
      urls: PropTypes.shape({
        regular: PropTypes.string.isRequired,
      }).isRequired,
      user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        profile: PropTypes.string.isRequired,
      }).isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PhotoList;
