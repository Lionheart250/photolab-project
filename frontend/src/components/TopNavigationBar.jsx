import React from "react";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ favoritesLength, topics, onTopicSelect }) => {
  const isFavFilled = favoritesLength > 0;

  return (
    <header className="top-nav">
      <div className="top-nav__logo">PhotoLabs</div>
      <nav className="top-nav__nav">
        <TopicList topics={topics} onTopicSelect={onTopicSelect} />
        <FavBadge isFavPhotoExist={isFavFilled} filled={isFavFilled} />
      </nav>
    </header>
  );
};

export default TopNavigationBar;
