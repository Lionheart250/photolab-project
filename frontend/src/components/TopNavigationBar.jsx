import React from 'react';
import { Link } from 'react-router-dom';
import useApplicationData from '../hooks/useApplicationData';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss';
import topics from '../mocks/topics';

const TopNavigation = () => {
  const { state } = useApplicationData(); // Use the custom hook

  const hasLikedPhotos = state.favoritedPhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar--logo">PhotoLabs</div>
      <nav className="top-nav-bar--nav">
        <ul>
          {topics.map(topic => (
            <li key={topic.id}>
              <Link to={`/topics/${topic.id}`}>{topic.title}</Link>
            </li>
          ))}
          <li>
            <Link to="/liked">
              <FavIcon
                displayAlert={hasLikedPhotos}
                selected={state.favoritedPhotos.length > 0}
              />
            </Link>
          </li>
        </ul>
        {hasLikedPhotos && <div className="notification">Liked Photos</div>}
      </nav>
    </div>
  );
};

export default TopNavigation;
