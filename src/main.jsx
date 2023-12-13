import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import { Login } from './Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
