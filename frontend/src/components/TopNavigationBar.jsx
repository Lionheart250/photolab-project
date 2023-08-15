import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss';
import topics from '../mocks/topics';

const TopNavigation = ({ isAnyPhotoFavorited }) => {
  const { state } = useAppContext(); // Use the custom hook

  return (
    <div className={`top-nav-bar ${isAnyPhotoFavorited ? 'red-heart' : ''}`}>
      <div className="top-nav-bar--logo">PhotoLabs</div>
      <nav className="top-nav-bar--nav">
        <ul>
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link to={`/topics/${topic.id}`}>{topic.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        to="/liked"
        className={`${
          isAnyPhotoFavorited ? 'red-link' : ''
        } ${state.favoritedPhotos.length > 0 ? 'active' : ''}`}
      >
        <FavIcon isLiked={isAnyPhotoFavorited} />
      </Link>
      {isAnyPhotoFavorited && <div className="notification">Liked Photos</div>}
    </div>
  );
};

export default TopNavigation;
