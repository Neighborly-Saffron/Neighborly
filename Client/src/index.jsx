import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth0Provider.jsx';
import '../Assets/style.css';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)

import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>
  );