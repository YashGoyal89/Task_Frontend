// LoginForm.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className='background-image'>
    <div className="login-form-container">
      <h2 className="login-form-heading">Login/Signup</h2>
      <Link to="/Login" className="login-form-link login-form-admin-link">
        Login
      </Link>
      <br />
      <Link to="/Signup" className="login-form-link login-form-user-link">
        Sign Up
      </Link>
    </div>
    </div>
  );
};

export default LoginForm;
