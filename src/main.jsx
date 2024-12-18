import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import './index.css';
import App from './App.jsx';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and render the App component wrapped in StrictMode and HelmetProvider
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
``