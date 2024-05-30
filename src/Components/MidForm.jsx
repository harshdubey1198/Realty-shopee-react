import React from 'react';
import "../App.css";
import contactImage from "../Images/SideHustle/Contact us.gif"; // Update the path to your SVG file

function MidForm() {
  return (
    <div className='midform'>
      <h4>Kindly Connect With Us!</h4>
      <div className='div-form'>
        <div className='img-container'>
          <img src={contactImage} alt="Contact Us" />
        </div>
        <form className='contact-midform'>
          <input  type='text'   placeholder='Name'    required />
          <input  type='email'  placeholder='Email'   required />
          <input  type='text'   placeholder='Phone'   required />
          <input  type='text'   placeholder='Message' required />
          
          <button type='submit' className='submit-button'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default MidForm;
