import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Faq from './Faq'
import App from './App';
import Gallery from './Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Gallery />
    <Faq />
  </React.StrictMode>
);

