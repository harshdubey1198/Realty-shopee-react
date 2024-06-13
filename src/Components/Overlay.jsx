import React, { useState } from 'react';
import '../App.css'; // Import global styles
import { IoMdCloseCircleOutline } from "react-icons/io";


const Overlay = ({ onClose, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    mobile: '',
    whenCanYouPlanAVisit: '',
    preferredProject: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://realty-react-backend.onrender.com/query-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Form submitted successfully:', data);
        // Clear form data after submission
        setFormData({
          clientName: '',
          email: '',
          mobile: '',
          whenCanYouPlanAVisit: '',
          preferredProject: '',
          message: ''
        });
        // Close overlay form after successful submission
        onFormSubmit(true);
      } else {
        console.error('Failed to submit form:', response.statusText);
        onFormSubmit(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      onFormSubmit(false);
    }
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <span className="close-overlay" onClick={onClose}><IoMdCloseCircleOutline /></span>
        <h2>Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="clientName">Name</label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              placeholder='Enter Your Name'
              value={formData.clientName}
              onChange={handleInputChange}
              required
              />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder='Enter Your Email'
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              placeholder='Enter Your Mobile Number'
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              />
          </div>
          <div className="form-group">
            <label htmlFor="whenCanYouPlanAVisit">Schedule A Free Visit!</label>
            <input
              type="text"
              id="whenCanYouPlanAVisit"
              placeholder='When Can You Plan A Visit ?'
              name="whenCanYouPlanAVisit"
              value={formData.whenCanYouPlanAVisit}
              onChange={handleInputChange}
              required
              />
          </div>
          <div className="form-group">
            <label htmlFor="preferredProject">Interested In</label>
            <select
              id="preferredProject"
              name="preferredProject"
              value={formData.preferredProject}
              onChange={handleInputChange}
            >
              <option value=''>Select Project</option>
              <option value='M3M'>M3M Projects</option>
              <option value='Signature'>Signature Projects</option>
              <option value='Omaxe'>Omaxe Projects</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder='Enter Your Message'
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Overlay;
