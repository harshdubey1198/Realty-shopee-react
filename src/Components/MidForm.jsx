import React from 'react';
import "../App.css";
import contactImage from "../Images/SideHustle/Contact us.gif"; // Update the path to your SVG file

function MidForm() {
  return (
    <div className='bt midform'>
      <h4>Kindly Connect With Us!</h4>
      <div className='div-form'>
        <div className='img-container'>
          <img src={contactImage} alt="Contact Us" />
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
            <textarea id='message' name='message' rows='4' required></textarea>
          </div>
          <button type='submit' className='submit-button'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default MidForm;
