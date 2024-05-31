import React, { useState } from 'react';
import '../App.css';
import fpImage from "../Images/Icons/forgot.png"

const Login = () => {
  const [overlayActive, setOverlayActive] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setOverlayActive(true);
  };

  const handleSignInClick = () => {
    setOverlayActive(false);
  };

  const handleToggle = (isSignUp) => {
    setIsSignUp(isSignUp);
  };

  return (
    <>
      
      <div className="main-login">
        <div className={`login-c ${overlayActive ? 'overlay-active' : ''}`}>
          <div className="signin-div">
            <h1>Sign In</h1>
            <form action="#">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign In</button>
            </form>
          </div>
          <div className="signup-div">
            <h1>Sign Up</h1>
            <form action="#">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
        <div className={`hidden-overflow ${overlayActive ? 'active' : ''}`}>
          {overlayActive ? (
            <>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button onClick={handleSignInClick} className='switch-overlay'>SIGN IN</button>
            </>
          ) : (
            <>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={handleSignUpClick} className='switch-overlay'>SIGN UP</button>
            </>
          )}
        </div>
        </div>
      </div>
      
      <div className="m-login-c">
        <div className="mobile-overlay">
          <button onClick={() => handleToggle(false)} className={!isSignUp ? 'active' : ''}>
            Sign In
          </button>
          <button onClick={() => handleToggle(true)} className={isSignUp ? 'active' : ''}>
            Sign Up
          </button>
        </div>
        <div className="mobile-container">
          <form className={!isSignUp ? 'active' : ''}>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
            <img src={fpImage} alt='' className='fp-image'/>
          </form>
          <form className={isSignUp ? 'active' : ''}>
            <h1>Sign Up</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
