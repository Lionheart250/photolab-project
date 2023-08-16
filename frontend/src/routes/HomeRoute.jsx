import React, { useState } from 'react';
import FavIcon from '../components/FavIcon';
import useApplicationData from '../hooks/useApplicationData';
import '../styles/HomeRoute.scss'; // Import the CSS file

const HomeRoute = ({ onPhotoLiked, onPhotoUnliked, openModal, closeModal }) => {
  const { state, updateToFavPhotoIds } = useApplicationData();

  const handleLikePhoto = (photoId) => {
    updateToFavPhotoIds(photoId);
    onPhotoLiked();
  };

  const handleImageClick = (photoData) => {
    openModal(photoData); // Pass the clicked photo data to openModal
  };

  return (
    <div className="home-route">
      <div className="photo-list photo-list--grid">
        {state.photos.map((photoData) => (
          <div key={photoData.id} className="photo-list__item">
            <button
              className="photo-list__fav-icon"
              onClick={() => handleLikePhoto(photoData.id)}
            >
              <FavIcon
                displayAlert={state.favoritedPhotos.includes(photoData.id)}
                selected={state.favoritedPhotos.includes(photoData.id)}
              />
            </button>
            <div className="photo-content">
              <button
                className="photo-list__image-button"
                onClick={() => handleImageClick(photoData)} // Call handleImageClick on image click
              >
                <img
                  src={photoData.urls.regular}
                  alt={`Photograph by ${photoData.user.username}`}
                  className="photo-list__image"
                />
              </button>
            </div>
            <div className="photo-details">
              <div className="profile-img">
                <img
                  src={photoData.user.profile}
                  alt={`Profile of ${photoData.user.username}`}
                  className="photo-list__user-profile"
                />
              </div>
              <div className="user-details">
                <div className="username">{photoData.user.username}</div>
                <div className="location">
                  {photoData.location.city}, {photoData.location.country}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeRoute;
