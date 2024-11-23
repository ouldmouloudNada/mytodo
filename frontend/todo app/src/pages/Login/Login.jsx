import React from 'react'
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import './Login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/Sign');
  };
  return (
    <div className="login-container">
      <div className="logo">MYtodo</div>
      <h1 className="welcome">Hello Again!</h1>
      <p className="subtitle">Welcome Back</p>
      <form className="login-form">
        <input type="email" placeholder="Enter your email" className="input-field" />
        <div className="password-field">
          <input type="password" placeholder="password" className="input-field" />
          <span className="eye-icon">👁️</span>
        </div>
        <button type="submit" className="login-button">LOG IN</button>
      </form>
      <div className="divider">
        <span>Or Continue With</span>
      </div>
      <div className="social-buttons">
        <button className="social-btn google">
          <img src={google} alt="" />
          <span className='goo'>Google</span>
        </button>
        <button className="social-btn facebook">
          <img src={facebook} alt="" />
          <span className='face'>Facebook</span>
        </button>
      </div>
      <p className="register">
        Not a member? <span className="register-link" onClick={handleSignUpClick}  >Register now</span>
      </p>
    </div>
  )
}

export default Login