import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Add this
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {' '}
      {/* ✅ Wrap your App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
