import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcHome, FcPhone, FcQuestions } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "../App.css";

function BlogAuth({ setAuth }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleContactUsClick = () => {
    navigate('/contactus');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    const hardcodedUsername = 'Manish';
    const hardcodedPassword = 'Manish@12';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      setAuth(true);
      localStorage.setItem('BlogUsername', username);
      navigate('/add-blogs');
    } else {
      alert('Incorrect username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="blog-auth">
      <header className='pd-nav'>
        <h2>
          <img src="https://www.realtyshopee.com/static/media/Realty%20shopee%20main%20logo.db6affde1f766278cf09.png" className='pd-logo' alt='Realty-Shopee-blogs' />
        </h2>
        <button onClick={handleHomeClick}><span>Home</span><span><FcHome /></span></button>
        <button onClick={handleContactUsClick}><span>Contact Us</span><span><FcQuestions /></span></button>
        <a href="tel:+919289252999"><span>+91 9289252999</span><span><FcPhone className='phone' /></span></a>
      </header>

      <h2>Login To Add Blogs</h2>
      <div className='flexrow'>
        <img className='img-login-auth' src="https://res.cloudinary.com/dgplzytrq/image/upload/v1719471442/Description%20Images/login-blogs.png" alt="Login For Blog Updation | Realty Shopee" />
        <form onSubmit={handleSubmit}>
          <h3>Enter Your Credentials</h3>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" onClick={togglePasswordVisibility} className="password-toggle-button">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default BlogAuth;
