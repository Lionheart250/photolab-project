import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios'; 
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import { AppProvider } from './context';
import Topic1Details from './routes/Topic1Details';
import Topic2Details from './routes/Topic2Details';
import Topic3Details from './routes/Topic3Details';
import Topic4Details from './routes/Topic4Details';
import Topic5Details from './routes/Topic5Details';
import LikedPhotos from './routes/LikedPhotos';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [isAnyPhotoFavorited, setIsAnyPhotoFavorited] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    // Fetch photo data from API and update state
    axios.get('/api/photos')
      .then(response => {
        setPhotoData(response.data);
      })
      .catch(error => {
        console.error('Error fetching photo data:', error);
      });
  
    // Fetch topic data from API and update state
    axios.get('/api/topics')
      .then(response => {
        // Update state with the fetched topic data
      })
      .catch(error => {
        console.error('Error fetching topic data:', error);
      });
  }, []);

  const openModal = (photoData) => {
    setSelectedPhoto(photoData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const handlePhotoLiked = () => {
    setIsAnyPhotoFavorited(true);
  };

  const handlePhotoUnliked = () => {
    setIsAnyPhotoFavorited(false);
  };

  return (
    <AppProvider>
      <Router>
        <div className="App">
          <TopNavigation
            isAnyPhotoFavorited={isAnyPhotoFavorited}
            openModal={() => openModal()} // Pass an empty function for now
          />
          <Routes>
            {/* Define routes for each topic */}
            {/* ... other routes ... */}
            {/* Define the HomeRoute and pass the necessary props */}
            <Route
              path="/"
              element={
                <HomeRoute
                  onPhotoLiked={handlePhotoLiked}
                  onPhotoUnliked={handlePhotoUnliked}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              }
            />
            <Route 
            path="/topics/1"
             element={
              <Topic1Details
              onPhotoLiked={handlePhotoLiked}
              onPhotoUnliked={handlePhotoUnliked}
              openModal={openModal}
              closeModal={closeModal}
              photoData={photoData} // Pass the fetched photo data
              topicData={[]}
            />
           }
          />
            <Route
            path="/topics/2" 
            element={
            <Topic2Details
            onPhotoLiked={handlePhotoLiked}
      onPhotoUnliked={handlePhotoUnliked}
      openModal={openModal}
      closeModal={closeModal}
      photoData={photoData} // Pass the fetched photo data
      topicData={[]} // Pass an initial value or an empty array
             />
             }
           /> 
            <Route
            path="/topics/3" 
            element={
            <Topic3Details
            onPhotoLiked={handlePhotoLiked}
      onPhotoUnliked={handlePhotoUnliked}
      openModal={openModal}
      closeModal={closeModal}
      photoData={photoData} // Pass the fetched photo data
      topicData={[]} // Pass an initial value or an empty array
             />
             }
           />
            <Route
            path="/topics/4" 
            element={
            <Topic4Details
            onPhotoLiked={handlePhotoLiked}
      onPhotoUnliked={handlePhotoUnliked}
      openModal={openModal}
      closeModal={closeModal}
      photoData={photoData} // Pass the fetched photo data
      topicData={[]} // Pass an initial value or an empty array
             />
             }
           />
            <Route
            path="/topics/5" 
            element={
            <Topic5Details
            onPhotoLiked={handlePhotoLiked}
      onPhotoUnliked={handlePhotoUnliked}
      openModal={openModal}
      closeModal={closeModal}
      photoData={photoData} // Pass the fetched photo data
      topicData={[]} // Pass an initial value or an empty array
             />
             }
           />
          </Routes>
          {/* Render the modal */}
          {isModalOpen && (
            <PhotoDetailsModal
              selectedPhoto={selectedPhoto}
              onClose={closeModal}
              onLikeToggle={handlePhotoLiked}
              onPhotoLiked={handlePhotoLiked}
              onPhotoUnliked={handlePhotoUnliked}
            />
          )}
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
