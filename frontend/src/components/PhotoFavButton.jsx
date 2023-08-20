import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ isFavorite, onToggle }) => {
  const handleFavClick = () => {
    onToggle();
  };

  const buttonClassName = `photo-fav-button ${isFavorite ? "active" : ""}`;

  return (
    <button className={buttonClassName} onClick={handleFavClick}>
      <div className="photo-fav-button__icon">
        <FavIcon displayAlert={false} selected={isFavorite} />
      </div>
    </button>
  );
};

export default PhotoFavButton;
