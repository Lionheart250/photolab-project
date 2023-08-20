import React from "react";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton"
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
  selectPhotoData,
  setSelectPhotoData,
  onCloseModal,
  favorites,
  toggleFavorite,
  setIsModalVisible
}) => {
  const isFavorite = favorites.includes(selectPhotoData.id);

  const handleToggleFavorite = () => {
    toggleFavorite(selectPhotoData.id);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          isFavorite={isFavorite}
          onToggle={handleToggleFavorite}
        />
        <img
          src={selectPhotoData.urls.full}
          alt="Selected"
          className="photo-details-modal__image"
        />
      </div>
      <div className="photo-details-modal__header">
        <h2>Related Photos</h2>
      </div>
      <PhotoList
        photos={Object.values(selectPhotoData.similar_photos)}
        favorites={favorites}
        setSelectPhotoData={setSelectPhotoData}
        setIsModalVisible={setIsModalVisible}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default PhotoDetailsModal;
