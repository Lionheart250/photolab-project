import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import Topic1Details from './routes/Topic1Details'; // Import components for each topic
import Topic2Details from './routes/Topic2Details';
import Topic3Details from './routes/Topic3Details';
import Topic4Details from './routes/Topic4Details';
import Topic5Details from './routes/Topic5Details';
import LikedPhotos from './routes/LikedPhotos'; // Import the component for "Liked" category
import { AppProvider } from './context';
import useApplicationData, { ACTIONS } from './hooks/useApplicationData';

const App = () => {
  const { dispatch } = useApplicationData();

  useEffect(() => {
    // Fetch initial data here...
  }, []);

  return (
    <AppProvider>
      <Router>
        <div className="App">
          <TopNavigation />
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            {/* Define routes for each topic */}
            <Route path="/topics/1" element={<Topic1Details />} />
            <Route path="/topics/2" element={<Topic2Details />} />
            <Route path="/topics/3" element={<Topic3Details />} />
            <Route path="/topics/4" element={<Topic4Details />} />
            <Route path="/topics/5" element={<Topic5Details />} />
            {/* Define route for "Liked" category */}
            <Route path="/liked" element={<LikedPhotos />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;


