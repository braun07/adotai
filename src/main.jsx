import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RedirectComponent } from './RedirectComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<RedirectComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
