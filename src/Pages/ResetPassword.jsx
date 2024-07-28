import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams(); 
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [temporaryPassword, setTemporaryPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTemporaryPasswordChange = (e) => setTemporaryPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:10/reset-password';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, temporaryPassword, newPassword, token }),
        credentials: 'include'
      });
      const data = await response.json();
      if (response.ok) {
        alert('Password reset successful. Please log in with your new password.');
        navigate('/login'); 
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

return (
    <div className="reset-password-div">
      <Helmet>
        <link rel="canonical" href={`https://www.realtyshopee.com/reset-password`} />
        <title>Reset Password - Realty Shopee</title>
        <link rel="icon" href="https://res.cloudinary.com/dgplzytrq/image/upload/v1720260452/Builders/r_logo_pz8qnp.png" />
      </Helmet>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit} className='rp-form'>
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
        <input type="password" name="temporaryPassword" placeholder="Temporary Password" value={temporaryPassword} onChange={handleTemporaryPasswordChange} required />
        <input type="password" name="newPassword" placeholder="New Password" value={newPassword} onChange={handleNewPasswordChange} required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
