import React from 'react';
import PropTypes from 'prop-types';
import PhotoFavButton from '../components/PhotoFavButton'; 
import '../styles/Topic1Details.css';

const Topic3Details = ({ onPhotoLiked, onPhotoUnliked }) => {
  const peopleImages = [
    {
      id: 11,
      urls: {
        full: 'http://localhost:8001/images/people-1-full.jpg',
        regular: 'http://localhost:8001/images/people-1-regular.jpg',
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
          id: 1,
          urls: {
            full: 'http://localhost:8001/images/Image-1-Full.jpeg',
            regular: 'http://localhost:8001/images/Image-1-Regular.jpeg',
          },
          user: {
            username: 'jdoe',
            name: 'John Doe',
            profile: 'http://localhost:8001/images/profile-1.jpg',
          },
          location: {
            city: 'Montreal',
            country: 'Canada',
          },
        },
        {
          id: 12,
          urls: {
            full: 'http://localhost:8001/images/people-2-full.jpg',
            regular: 'http://localhost:8001/images/people-2-regular.jpg',
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
          id: 13,
          urls: {
            full: 'http://localhost:8001/images/people-3-full.jpg',
            regular: 'http://localhost:8001/images/people-3-regular.jpg',
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
          id: 14,
          urls: {
            full: 'http://localhost:8001/images/people-4-full.jpg',
            regular: 'http://localhost:8001/images/people-4-regular.jpg',
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
          id: 15,
          urls: {
            full: 'http://localhost:8001/images/people-5-full.jpg',
            regular: 'http://localhost:8001/images/people-5-regular.jpg',
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
          id: 16,
          urls: {
            full: 'http://localhost:8001/images/people-6-full.jpg',
            regular: 'http://localhost:8001/images/people-6-regular.jpg',
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
          id: 17,
          urls: {
            full: 'http://localhost:8001/images/people-7-full.jpg',
            regular: 'http://localhost:8001/images/people-7-regular.jpg',
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
          id: 18,
          urls: {
            full: 'http://localhost:8001/images/people-8-full.jpg',
            regular: 'http://localhost:8001/images/people-8-regular.jpg',
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
          id: 19,
          urls: {
            full: 'http://localhost:8001/images/people-9-full.jpg',
            regular: 'http://localhost:8001/images/people-9-regular.jpg',
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
    // ... (add more main people photos as needed)
  ];

  return (
    <div className="topic-details">
      {peopleImages.map(photo => (
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

Topic3Details.propTypes = {
  onPhotoLiked: PropTypes.func.isRequired,
  onPhotoUnliked: PropTypes.func.isRequired,
};

export default Topic3Details;
