import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
  data,
  setSelectPhotoData,
  favorites,
  setIsModalVisible,
  toggleFavorite
}) => {
  const { id, location, urls, user } = data;
  const isFavorite = favorites.includes(id);

  const handleOpenModal = () => {
    setSelectPhotoData(data);
    setIsModalVisible(true);
  };

  const onToggle = () => {
    toggleFavorite(id);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavorite={isFavorite} onToggle={onToggle} />
      <button onClick={handleOpenModal} className="photo-button">
        <img src={urls.regular} alt="" className="photo-list__image" />
      </button>
      <div className="personal">
        <div className="info">
          <h2>{user.username}</h2>
          <p>
            {location.city}, {location.country}
          </p>
        </div>
        <img
          alt=""
          src={user.profile}
          className="photo-list__user-profile"
        />
      </div>
    </div>
  );
};

export default PhotoListItem;
