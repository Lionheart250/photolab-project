import { useReducer, useState, useEffect } from "react"

export const ACTIONS = { 
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  REMOVE_PHOTO_DETAILS: 'REMOVE_PHOTO_DETAILS'
}

const initialState = {
  favorites: [],
  isModalVisible: false,
  selectPhotoData: {},
  photoData: [],
  topicData: []
}


export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return { ...state, favorites: [...state.favorites, action.photoId] } 
      case ACTIONS.FAV_PHOTO_REMOVED:
        return { ...state, favorites: state.favorites.filter(id => id !== action.photoId) }
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.photoData}
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.topicData}
        case ACTIONS.SELECT_PHOTO:
        return { ...state, selectPhotoData: action.selectPhotoData } 
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return { ...state, isModalVisible: true }; 
      case ACTIONS.REMOVE_PHOTO_DETAILS:
        return { ...state, isModalVisible: false };
      default:
        return state;
    }
  }

  useEffect(() => {
    fetch(`http://localhost:8001/api/photos`).then(response => response.json())
    .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, photoData: data}));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8001/api/topics`).then(response => response.json())
    .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, topicData: data}));
  }, []);

  const toggleFavorite = (photoId) => {
    if (state.favorites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }
  };

  const setPhotoSelected = (data) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, selectPhotoData: data });
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.REMOVE_PHOTO_DETAILS });
  };

  const onOpenPhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const onTopicSelect = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`).then(response => response.json())
    .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, photoData: data}));
  }


  return {
    state,
    toggleFavorite,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal,
    onTopicSelect
  }
}