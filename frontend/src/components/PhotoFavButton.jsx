import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ isFavorite, onToggle }) {
  const handleFavClick = () => {
    onToggle();
  };

  return (
    <button
      className={`photo-list__fav-icon ${isFavorite ? "active" : ""}`}
      onClick={handleFavClick}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={isFavorite} />
      </div>
    </button>
  );
}

export default PhotoFavButton;
