import React from 'react';
import "./Contact.css";
import formImage from "../Images/SideHustle/Contact us.gif"; 
import { useNavigate } from 'react-router-dom';
function ContactUs() {
    const navigate =useNavigate();
    const handleClick = () => {
        navigate('/');
    }


  return (
     <div className='contact-us-page'>
      <h1>Contact Us</h1>
      <div className='div-form'>
        <div className='svg-container'>
          <img src={formImage} alt="Contact Us" />
        </div>
        <form className='contact-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <input type='text' id='message' name='message' required />
          </div>
          <div className='form-group'>
            <label htmlFor='preferredProject'>Interested In </label>
            <select id='preferredProject' name='preferredProject'>
                <option value=''>Select Project</option>
                <option value='project1'>Project 1</option>
                <option value='project2'>Project 2</option>
                <option value='project3'>Project 3</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Schedule A Free Visit !</label>
            <input type='text' id='message' name='message' required />
          </div>
          <button type='submit' className='submit-button'>Submit</button>
        </form>
      </div>
      <button onClick={handleClick} className='explore'>Explore More</button>
    </div>
  );
}

export default ContactUs;
