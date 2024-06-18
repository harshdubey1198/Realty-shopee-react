import React, { useState } from 'react';
import '../App.css';

const Login = () => {
  const [overlayActive, setOverlayActive] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '',mobile:'', password: '' });
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const url = 'https://realty-react-backend.onrender.com/signin';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include'
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('username', data.user.name);
        window.location.href = '/';
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const url = 'https://realty-react-backend.onrender.com/signup';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include'
      });
      const data = await response.json();
      if (response.ok) {
        window.location.href = '/';
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const url = 'https://realty-react-backend.onrender.com/forgot-password';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
        credentials: 'include'
      });
      const data = await response.json();
      if (response.ok) {
        alert('Password reset link sent to your email.');
        setIsForgotPassword(false);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="main-login">
        <div className={`login-c ${overlayActive ? 'overlay-active' : ''}`}>
          {!isForgotPassword ? (
            <>
              <div className="signin-div">
                <h1>Sign In</h1>
                <form onSubmit={handleSignIn}>
                  <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                  <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                  <button type="submit">Sign In</button>
                </form>
                <button onClick={() => setIsForgotPassword(true)} className="forgot-password-link">Forgot Password?</button>
              </div>
              <div className="signup-div">
                <h1>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                  <input type="text" name="name" placeholder="Enter Your Name" value={form.name} onChange={handleChange} required />
                  <input type="email" name="email" placeholder="Enter Your Email" value={form.email} onChange={handleChange} required />
                  <input type="number" name="mobile" placeholder="Enter Your Mobile" value={form.mobile} onChange={handleChange} required />
                  <input type="password" name="password" placeholder="Setup Your Password" value={form.password} onChange={handleChange} required />
                  <button type="submit">Sign Up</button>
                </form>
              </div>
            </>
          ) : (
            <div className="forgot-password-div">
              <h1>Forgot Password</h1>
              <form onSubmit={handleForgotPassword}>
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                <button type="submit">Send Reset Link</button>
              </form>
              <button onClick={() => setIsForgotPassword(false)} className="back-to-login-link">Back to Login</button>
            </div>
          )}
          {!isForgotPassword && (
            <div className={`hidden-overflow ${overlayActive ? 'active' : ''}`}>
              {overlayActive ? (
                <>
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us, please login with your personal info</p>
                  <button onClick={() => setOverlayActive(false)} className='switch-overlay'>SIGN IN</button>
                </>
              ) : (
                <>
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button onClick={() => setOverlayActive(true)} className='switch-overlay'>SIGN UP</button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="m-login-c">
        {!isForgotPassword ? (
          <>
            <div className="mobile-overlay">
              <button onClick={() => setIsSignUp(false)} className={!isSignUp ? 'active' : ''}>
                Sign In
              </button>
              <button onClick={() => setIsSignUp(true)} className={isSignUp ? 'active' : ''}>
                Sign Up
              </button>
            </div>
            <div className="mobile-container">
              <form onSubmit={handleSignIn} className={!isSignUp ? 'active' : ''}>
                <h1>Sign In</h1>
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                <button type="submit">Sign In</button>
                <button onClick={() => setIsForgotPassword(true)} className="forgot-password-link">Forgot Password?</button>
              </form>
              <form onSubmit={handleSignUp} className={isSignUp ? 'active' : ''}>
                <h1>Sign Up</h1>
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input type="number" name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </>
        ) : (
          <div className="forgot-password-div">
            <h1>Forgot Password</h1>
            <form onSubmit={handleForgotPassword} className='fp-form'>
              <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
              <button type="submit">Send Reset Link</button>
            </form>
            <button onClick={() => setIsForgotPassword(false)} className="back-to-login-link">Back to Login</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
