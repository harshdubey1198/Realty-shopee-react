import React, { useState } from 'react';
import '../App.css';
import fpImage from "../Images/Icons/forgot.png";

const Login = () => {
  const [overlayActive, setOverlayActive] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:10/signin';
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
    const url = 'http://localhost:10/signup';
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

  return (
    <>
      <div className="main-login">
        <div className={`login-c ${overlayActive ? 'overlay-active' : ''}`}>
          <div className="signin-div">
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className="signup-div">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
              <button type="submit">Sign Up</button>
            </form>
          </div>
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
        </div>
      </div>
      <div className="m-login-c">
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
            <img src={fpImage} alt='' className='fp-image'/>
          </form>
          <form onSubmit={handleSignUp} className={isSignUp ? 'active' : ''}>
            <h1>Sign Up</h1>
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
