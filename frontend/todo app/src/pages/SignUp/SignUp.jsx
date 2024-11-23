import React from 'react';
import image from '../../assets/sign.svg';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/Sign');
  };

  const handleLoginClick = () => {
    navigate('/Login');
  };

  return (
    <div className='sign'>
      <div className="image">
        <img src={image} alt="Task Manager Illustration" />
      </div>
      <div className="title">
        <h1>Start Manage Your Task With</h1>
        <h1 className='logo'>MYtodo</h1>
      </div>
      <div className="btn2">
        <button onClick={handleSignUpClick}>SIGN UP</button>
      </div>
      <p>
        Already have an account?
        <span onClick={handleLoginClick} className="login-link"> LOG IN</span>
      </p>
    </div>
  );
};

export default SignUp;
