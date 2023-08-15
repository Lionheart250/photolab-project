import React from 'react';
import useApplicationData from '../hooks/useApplicationData';
import closeSymbol from '../assets/closeSymbol.svg';
import FavIcon from '../components/FavIcon';
import mockPhotos from '../mocks/photos';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ selectedPhoto, onClose }) => {
  const { state, updateToFavPhotoIds } = useApplicationData(); // Use the custom hook
  const { urls, user } = selectedPhoto;

  // Real data for similar photos
  const similarPhotos = mockPhotos.slice(1, 4);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <div className="photo-details-modal__image-container">
          <button
            className="photo-details-modal__fav-icon"
            onClick={() => updateToFavPhotoIds(selectedPhoto.id)}
          >
            <FavIcon
              displayAlert={state.favoritedPhotos.includes(selectedPhoto.id)}
              selected={state.favoritedPhotos.includes(selectedPhoto.id)}
            />
          </button>
          <img src={urls.regular} alt={`Photograph by ${user.username}`} className="photo-details-modal__image" />
        </div>
        <p>Similar Photos</p>
        <div className="photo-details-modal__similar-photos">
          {similarPhotos.slice(0, 2).map((photo) => (
            <div key={photo.id} className="photo-details-modal__similar-photo">
              <button
                className="photo-details-modal__fav-icon"
                onClick={() => updateToFavPhotoIds(photo.id)}
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
