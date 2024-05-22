import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './PixelVenturesContainer/Header/Header.css';
import './PixelVenturesContainer/Nav/Nav.css';
import './PixelVenturesContainer/Tech/Tech.css';
import './PixelVenturesContainer/Portfolio/Portfolio.css';
import './PixelVenturesContainer/About/About.css';
import './PixelVenturesContainer/Contact/Contact.css';
import './PixelVenturesContainer/Footer/Footer.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
