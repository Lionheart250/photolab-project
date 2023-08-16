import React from 'react';
import PropTypes from 'prop-types';
import PhotoFavButton from '../components/PhotoFavButton'; 
import '../styles/Topic1Details.css';

const Topic5Details = ({ onPhotoLiked, onPhotoUnliked }) => {
  const animalsImages = [
    {
      id: 41,
      urls: {
        full: 'http://localhost:8001/images/animals-1-full.jpg',
        regular: 'http://localhost:8001/images/animals-1-regular.jpg',
      },
      user: {
        username: 'jdoe',
        name: 'John Doe',
        profile: 'http://localhost:8001/images/profile-1.jpg',
      },
      location: {
        city: 'Toronto',
        country: 'Canada',
      },
      similar_photos: [
        {
          id: 42,
          urls: {
            full: 'http://localhost:8001/images/animals-2-full.jpg',
            regular: 'http://localhost:8001/images/animals-2-regular.jpg',
          },
          user: {
            username: 'awond',
            name: 'Alice Wonderland',
            profile: 'http://localhost:8001/images/profile-2.jpg',
          },
          location: {
            city: 'Vancouver',
            country: 'Canada',
          },
        },
        {
          id: 43,
          urls: {
            full: 'http://localhost:8001/images/animals-3-full.jpg',
            regular: 'http://localhost:8001/images/animals-3-regular.jpg',
          },
          user: {
            username: 'sitad',
            name: 'Sita Dennis',
            profile: 'http://localhost:8001/images/profile-3.jpg',
          },
          location: {
            city: 'Calgary',
            country: 'Canada',
          },
        },
        {
          id: 44,
          urls: {
            full: 'http://localhost:8001/images/animals-4-full.jpg',
            regular: 'http://localhost:8001/images/animals-4-regular.jpg',
          },
          user: {
            username: 'matte',
            name: 'Sasha Mateo',
            profile: 'http://localhost:8001/images/profile-4.jpg',
          },
          location: {
            city: 'Victoria',
            country: 'Canada',
          },
        },
        {
          id: 45,
          urls: {
            full: 'http://localhost:8001/images/animals-5-full.jpg',
            regular: 'http://localhost:8001/images/animals-5-regular.jpg',
          },
          user: {
            username: 'anita',
            name: 'Anita Austi',
            profile: 'http://localhost:8001/images/profile-5.jpg',
          },
          location: {
            city: 'Ottawa',
            country: 'Canada',
          },
        },
        {
          id: 46,
          urls: {
            full: 'http://localhost:8001/images/animals-6-full.jpg',
            regular: 'http://localhost:8001/images/animals-6-regular.jpg',
          },
          user: {
            username: 'lsouza',
            name: 'Lukas Souza',
            profile: 'http://localhost:8001/images/profile-6.jpg',
          },
          location: {
            city: 'Montreal',
            country: 'Canada',
          },
        },
        {
          id: 47,
          urls: {
            full: 'http://localhost:8001/images/animals-7-full.jpg',
            regular: 'http://localhost:8001/images/animals-7-regular.jpg',
          },
          user: {
            username: 'josea',
            name: 'Jose Alejandro',
            profile: 'http://localhost:8001/images/profile-7.jpg',
          },
          location: {
            city: 'Toronto',
            country: 'Canada',
          },
        },
        // ... (add more similar_photos data as needed)
      ],
    },
    // ... (add more main animals photos as needed)
  ];

  return (
    <div className="topic-details">
      {animalsImages.map(photo => (
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
                      newFavorite ? onPhotoLiked(similarPhoto.id) : onPhotoUnliked(similarPhoto.id)
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

Topic5Details.propTypes = {
  onPhotoLiked: PropTypes.func.isRequired,
  onPhotoUnliked: PropTypes.func.isRequired,
};

export default Topic5Details;
