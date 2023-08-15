import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import photosMockData from './mocks/photos';
import { AppProvider } from './context';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <TopNavigation />
          <Routes>
            <Route path="/" element={<HomeRoute photos={photosMockData} />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
