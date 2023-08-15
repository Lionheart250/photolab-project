import React, { useState } from 'react';
import FavIcon from '../components/FavIcon';
import PhotoDetailsModal from './PhotoDetailsModal';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/HomeRoute.scss';
import useApplicationData from '../hooks/useApplicationData';
import TopNavigation from '../components/TopNavigationBar';

const HomeRoute = () => {
  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal } = useApplicationData();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photoData) => {
    setPhotoSelected(photoData);
    setSelectedPhoto(photoData);
  };

  const closeModal = () => {
    onClosePhotoDetailsModal();
    setSelectedPhoto(null);
  };

  return (
    <div className="home-route">
      <TopNavigation isAnyPhotoFavorited={state.favoritedPhotos.length > 0} />

      <div className="photo-list photo-list--grid">
        {state.photos.map((photoData) => (
          <div key={photoData.id} className="photo-list__item">
            <button
              className="photo-list__fav-icon"
              onClick={() => updateToFavPhotoIds(photoData.id)}
            >
              <FavIcon
                displayAlert={state.favoritedPhotos.includes(photoData.id)}
                selected={state.favoritedPhotos.includes(photoData.id)}
              />
            </button>
            <div className="photo-content">
              <button
                className="photo-list__image-button"
                onClick={() => openModal(photoData)}
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
      {selectedPhoto && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          onClose={closeModal}
          isLiked={state.favoritedPhotos.includes(selectedPhoto.id)}
          isAnyPhotoFavorited={state.favoritedPhotos.length > 0}
        />
      )}
    </div>
  );
};

export default HomeRoute;
