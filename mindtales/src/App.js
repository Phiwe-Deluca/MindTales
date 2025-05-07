import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/themeStyles.css';
import "C:/Users/tshep/Myprojects/MindTales/mindtales/src/styles/index.css";

// Import Context Providers
import ThemeProvider from './context/ThemeContext';
import MoodProvider from './context/MoodContext';
import DiaryProvider from './context/DiaryContext';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// Import Pages
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import Profile from './pages/Profile';
import DiaryPage from './pages/DiaryPage';
import Settings from './pages/Settings';

const App = () => {
  const location = useLocation(); // React Router's built-in way to detect the current path
  const isLandingPage = location.pathname === "/";

  return (
    <ThemeProvider>
      <MoodProvider>
        <DiaryProvider>
          <Router>
            {!isLandingPage && <Navbar />}
            <div style={styles.container}>
              {!isLandingPage && <Sidebar />}
              <div style={styles.mainContent}>
                <Routes>
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/post/:id" element={<PostPage />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/diary" element={<DiaryPage />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
            </div>
            {!isLandingPage && <Footer />}
          </Router>
        </DiaryProvider>
      </MoodProvider>
    </ThemeProvider>
  );
};

const styles = {
  container: { display: 'flex', minHeight: '100vh' },
  mainContent: { flex: 1, padding: '2rem' },
};

export default App;
