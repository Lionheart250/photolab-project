import React, { useState } from 'react';
import useApplicationData from '../hooks/useApplicationData'; // Import the useApplicationData hook
import FavIcon from '../components/FavIcon';
import closeSymbol from '../assets/closeSymbol.svg';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ selectedPhoto, onClose, onLikeToggle }) => {
  const { state, updateToFavPhotoIds } = useApplicationData();
  const [isAnyPhotoFavorited, setIsAnyPhotoFavorited] = useState(
    state.favoritedPhotos.length > 0
  );

  // Function to handle liking a photo in the modal
  const handleLikeClick = (photoId) => {
    updateToFavPhotoIds(photoId);
    onLikeToggle();    
  };

  if (!selectedPhoto) {
    // Return null or a placeholder if selectedPhoto is null
    return null;
  }

  const { urls, user } = selectedPhoto;

  const similarPhotos = state.photos
    .filter((photo) => photo.id !== selectedPhoto.id)
    .slice(0, 4);

    return (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className="photo-details-modal__content">
          <div className="photo-details-modal__image-container">
            <button
              className="photo-details-modal__fav-icon"
              onClick={() => handleLikeClick(selectedPhoto.id)}
            >
              <FavIcon
                displayAlert={state.favoritedPhotos.includes(selectedPhoto.id)}
                selected={state.favoritedPhotos.includes(selectedPhoto.id)}
              />
            </button>
            <img
              src={urls.regular}
              alt={`Photograph by ${user.username}`}
              className="photo-details-modal__image"
            />
          </div>
          {isAnyPhotoFavorited && <p>You have favorited photos!</p>}
          <p>Similar Photos</p>
          <div className="photo-details-modal__similar-photos">
            {similarPhotos.map((photo) => (
              <div key={photo.id} className="photo-details-modal__similar-photo">
                <button
                  className="photo-details-modal__fav-icon"
                  onClick={() => handleLikeClick(photo.id)}
                >
                  <FavIcon
                    displayAlert={state.favoritedPhotos.includes(photo.id)}
                    selected={state.favoritedPhotos.includes(photo.id)}
                  />
                </button>
                <img
                  src={photo.urls.regular}
                  alt={`Similar by ${photo.user.username}`}
                  className="photo-details-modal__similar-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PhotoDetailsModal;