import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Import Context Providers
import ThemeProvider from './context/ThemeContext';
import MoodProvider from './context/MoodContext';
import DiaryProvider from './context/DiaryContext';

// Import global styles (optional)
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MoodProvider>
          <DiaryProvider>
            <App />
          </DiaryProvider>
        </MoodProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
