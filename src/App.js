import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/Login/LoginForm';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/home/home';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [userData, setUserData] = useState(null);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login  />} />
          <Route path="/Home" element={<Home /> } />       
                 
        </Routes>
      </BrowserRouter>


    </div>
  );
};

export default App;
