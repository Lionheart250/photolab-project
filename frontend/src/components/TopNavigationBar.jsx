import React from 'react';
import { Link } from 'react-router-dom';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss';
import topics from '../mocks/topics';

const TopNavigation = ({ isAnyPhotoFavorited }) => {
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
        } ${isAnyPhotoFavorited ? 'active' : ''}`}
      >
        <FavIcon isLiked={isAnyPhotoFavorited} />
      </Link>
      {isAnyPhotoFavorited && <div className="notification">Liked Photos</div>}
    </div>
  );
};

export default TopNavigation;
