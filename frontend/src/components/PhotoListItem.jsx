import React from 'react';
import PropTypes from 'prop-types';
import PhotoFavButton from './PhotoFavButton'; // Make sure to import the correct path
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { location, urls, user } = props.photoData;

  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavorite={false} onClick={() => { /* Handle click here */ }} />
      <img src={urls.regular} alt={`Photograph by ${user.username}`} />
      <div className="photo-details">
        <div className="location">
          {location.city}, {location.country}
        </div>
        <div className="username">{user.username}</div>
      </div>
    </div>
  );
};

PhotoListItem.propTypes = {
  photoData: PropTypes.shape({
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PhotoListItem;
