import React from "react";
import PhotoListItem from "./PhotoListItem"; // Import the PhotoListItem component
import PropTypes from "prop-types";

import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photoData={photo} />
      ))}
    </ul>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }).isRequired,
      urls: PropTypes.shape({
        full: PropTypes.string.isRequired,
        regular: PropTypes.string.isRequired,
      }).isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        profile: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default PhotoList;
