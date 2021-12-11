import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// bootstrap & popper & jquery & font awesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.render(
  <Router basename="/#/">
    <App />
  </Router>
  ,
  document.getElementById('root')
)