// Topic1Details.js
import React from 'react';
import PropTypes from 'prop-types';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/Topic1Details.css';
import { topic1Images } from '../components/photoData';

const Topic1Details = ({ photoData, topicData, onPhotoLiked, onPhotoUnliked, openModal, closeModal }) => {

  // Use topic1Images instead of natureImages
  const images = topic1Images;

  return (
    <div className="topic-details">
      {images.map(photo => (
        <div key={photo.id} className="photo-card">
          <div className="card-content">
            <PhotoFavButton
              isFavorite={false}
              onClick={() => onPhotoLiked(photo.id)}
              onFavChange={(newFavorite) =>
                newFavorite ? onPhotoLiked(photo.id) : onPhotoUnliked(photo.id)
              }
            />
            <img src={photo.urls.full} alt={`${photo.user.name}`} />
            <div className="photo-user">
              {photo.user.name} (@{photo.user.username})
            </div>
          </div>
          <h3>Similar Photos:</h3>
          <div className="similar-photos">
            {photo.similar_photos.map(similarPhoto => (
              <div key={similarPhoto.id} className="similar-photo-card">
                <div className="card-content">
                  <PhotoFavButton
                    isFavorite={false}
                    onClick={() => onPhotoLiked(similarPhoto.id)}
                    onFavChange={(newFavorite) =>
                      newFavorite
                        ? onPhotoLiked(similarPhoto.id)
                        : onPhotoUnliked(similarPhoto.id)
                    }
                  />
                  <img
                    src={similarPhoto.urls.full}
                    alt={`${similarPhoto.user.name}`}
                  />
                  <div className="photo-user">
                    {similarPhoto.user.name} (@{similarPhoto.user.username})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

Topic1Details.propTypes = {
  onPhotoLiked: PropTypes.func.isRequired,
  onPhotoUnliked: PropTypes.func.isRequired,
};

export default Topic1Details;
