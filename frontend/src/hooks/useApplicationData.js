import { useReducer, useEffect } from 'react';



export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTOS_FOR_TOPIC: 'SET_PHOTOS_FOR_TOPIC' // New action type for photos of a specific topic
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favoritedPhotos: [...state.favoritedPhotos, action.payload.id] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favoritedPhotos: state.favoritedPhotos.filter(id => id !== action.payload.id) };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isPhotoDetailsModalOpen: true };
    case ACTIONS.SET_PHOTOS_FOR_TOPIC:
      return {
        ...state,
        photosForTopic: { ...state.photosForTopic, [action.payload.topicId]: action.payload.photos }
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const initialState = {
    photos: [],
    topics: [],
    favoritedPhotos: [],
    selectedPhoto: null,
    isPhotoDetailsModalOpen: false,
    photosForTopic: {} // New state to store photos for specific topics
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favoritedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const setPhotoSelected = (photoData) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoData });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
  };

  useEffect(() => {
    // Fetch photo data from the backend server (http://localhost:8001/api/photos)
    fetch('http://localhost:8001/api/photos')
      .then(response => response.json())
      .then(data => 
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(error => {
        console.error('Error fetching photo data:', error);
      });

    // Fetch topic data from the backend server (http://localhost:8001/api/topics)
    fetch('http://localhost:8001/api/topics')
      .then(response => response.json())
      .then(data => 
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch(error => {
        console.error('Error fetching topic data:', error);
      });
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
}
