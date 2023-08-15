// context.js
import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  favoritedPhotos: [],
  photos: [], // Add the photos array to the initial state
};

// Define actions to modify the state
const actions = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};

// Define a reducer function
function reducer(state, action) {
  switch (action.type) {
    case actions.TOGGLE_FAVORITE:
      const photoId = action.payload;
      const isFavorited = state.favoritedPhotos.includes(photoId);
      return {
        ...state,
        favoritedPhotos: isFavorited
          ? state.favoritedPhotos.filter(id => id !== photoId)
          : [...state.favoritedPhotos, photoId],
      };
    default:
      return state;
  }
}

// Create the context and provider
const AppContext = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to access the context
function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext, actions };
