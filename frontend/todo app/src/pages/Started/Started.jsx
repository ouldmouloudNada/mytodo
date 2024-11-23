import React from 'react'
import started from '../../assets/started.svg'
import './Started.css'
import { useNavigate } from 'react-router-dom';
function Started() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/SignUp');
    };
  return (
    <div className='started'>
        <div className="image">
            <img src={started} alt="" />
        </div>
        <div className="title">
            <h1>Manage your tasks</h1>
            <p>organize, plan, and collaborate on tasks with MYtodo.Your busy life deserves this.you can manage checklist and your goal. </p>
        </div>
        <div className="btn1">
            <button onClick={handleClick}>Get Started</button>
        </div>
    </div>
  )
}

export default Started