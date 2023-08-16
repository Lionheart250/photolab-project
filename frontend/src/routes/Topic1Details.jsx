import React from 'react';
import PropTypes from 'prop-types';
import PhotoFavButton from '../components/PhotoFavButton'; 
import '../styles/Topic1Details.css';

const Topic1Details = ({ onPhotoLiked, onPhotoUnliked }) => {
  const natureImages = [
    {
      id: 21,
      urls: {
        full: 'http://localhost:8001/images/nature-1-full.jpg',
        regular: 'http://localhost:8001/images/nature-1-regular.jpg',
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
          id: 22,
          urls: {
            full: 'http://localhost:8001/images/nature-2-full.jpg',
            regular: 'http://localhost:8001/images/nature-2-regular.jpg',
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
          id: 23,
          urls: {
            full: 'http://localhost:8001/images/nature-3-full.jpg',
            regular: 'http://localhost:8001/images/nature-3-regular.jpg',
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
          id: 24,
          urls: {
            full: 'http://localhost:8001/images/nature-4-full.jpg',
            regular: 'http://localhost:8001/images/nature-4-regular.jpg',
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
          id: 25,
          urls: {
            full: 'http://localhost:8001/images/nature-5-full.jpg',
            regular: 'http://localhost:8001/images/nature-5-regular.jpg',
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
          id: 26,
          urls: {
            full: 'http://localhost:8001/images/nature-6-full.jpg',
            regular: 'http://localhost:8001/images/nature-6-regular.jpg',
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
          id: 27,
          urls: {
            full: 'http://localhost:8001/images/nature-7-full.jpg',
            regular: 'http://localhost:8001/images/nature-7-regular.jpg',
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
        {
          id: 28,
          urls: {
            full: 'http://localhost:8001/images/nature-8-full.jpg',
            regular: 'http://localhost:8001/images/nature-8-regular.jpg',
          },
          user: {
            username: 'jdwayne',
            name: 'Dwayne Jacob',
            profile: 'http://localhost:8001/images/profile-8.jpg',
          },
          location: {
            city: 'Vancouver',
            country: 'Canada',
          },
        },
        {
          id: 29,
          urls: {
            full: 'http://localhost:8001/images/nature-9-full.jpg',
            regular: 'http://localhost:8001/images/nature-9-regular.jpg',
          },
          user: {
            username: 'saeng',
            name: 'Allison Saeng',
            profile: 'http://localhost:8001/images/profile-9.jpg',
          },
          location: {
            city: 'Calgary',
            country: 'Canada',
          },
        },
        // ... (add more similar_photos data as needed)
      ],
    },
    // ... (add more main nature photos as needed)
  ];

  return (
    <div className="topic-details">
      {natureImages.map(photo => (
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
Topic1Details.propTypes = {
  onPhotoLiked: PropTypes.func.isRequired,
  onPhotoUnliked: PropTypes.func.isRequired,
};

export default Topic1Details;