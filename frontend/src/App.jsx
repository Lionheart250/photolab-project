import React from "react";
import useApplicationData from "hooks/useApplicationData";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import "./App.scss";

const App = () => {
  const {
    state,
    toggleFavorite,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal,
    onTopicSelect,
  } = useApplicationData();

  const homeRouteProps = {
    photos: state.photoData,
    topics: state.topicData,
    favorites: state.favorites,
    onTopicSelect,
    setSelectPhotoData: setPhotoSelected,
    setIsModalVisible: onOpenPhotoDetailsModal,
    toggleFavorite,
  };

  const photoDetailsModalProps = {
    favorites: state.favorites,
    toggleFavorite,
    selectPhotoData: state.selectPhotoData,
    onCloseModal: onClosePhotoDetailsModal,
    setSelectPhotoData: setPhotoSelected,
    setIsModalVisible: onOpenPhotoDetailsModal,
  };

  return (
    <div className="App">
      <HomeRoute {...homeRouteProps} />
      {state.isModalVisible && <PhotoDetailsModal {...photoDetailsModalProps} />}
    </div>
  );
};

export default App;
