import React, { useEffect, useState } from 'react';
import useApplicationData, { ACTIONS } from '../hooks/useApplicationData';

const LikedPhotos = () => {
  const { state, dispatch } = useApplicationData(); // Use the custom hook
  const [likedPhotos, setLikedPhotos] = useState([]);

  useEffect(() => {
    // Fetch liked photos using the state
    const likedPhotosData = state.photos.filter(photo => state.favoritedPhotos.includes(photo.id));
    setLikedPhotos(likedPhotosData);
  }, [state.photos, state.favoritedPhotos]);

  // Render the liked photos
  return (
    <div className="liked-photos">
      {likedPhotos.length > 0 ? (
        <div>
          {/* Display liked photos here */}
        </div>
      ) : (
        <div>No liked photos.</div>
      )}
    </div>
  );
};

export default LikedPhotos;
