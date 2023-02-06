import React from 'react';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>,
);