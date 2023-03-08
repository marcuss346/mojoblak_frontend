import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from './pages/login'
import Register from './pages/register'
import FrontPage from './pages/frontPage';
import Dashboard from './pages/dashboard'
import Trash from './pages/trash';
import Forgot from './pages/forgotPassword'
import ResetPasswordPage from './pages/resetPassword';


function App() {



  return (
    <div className="h-screen">
      <Router>
        <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotPassword" element={<Forgot />} />
          <Route path="/resetPassword" element={<ResetPasswordPage />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
