import React, { useState } from 'react';
import "../App.css";
import contactImage from "../Images/SideHustle/Contact us.gif"; // Update the path to your image file

function MidForm() {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    mobile: "",
    whenCanYouPlanAVisit:"",
    message: ""
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
      const response = await fetch(
        "http://localhost:10/query-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Form submitted successfully:", data);
        // Clear form data after submission
        setFormData({
          clientName: "",
          email: "",
          mobile: "",
          whenCanYouPlanAVisit:"",
          message: ""
        });
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className='midform'>
      <h4>Kindly Connect With Us!</h4>
      <div className='div-form'>
        <div className='img-container'>
          <img src={contactImage} alt="Contact Us" />
        </div>
        <form className='contact-midform' onSubmit={handleSubmit}>
          <input
            type='text'
            name='clientName'
            placeholder='Name'
            value={formData.clientName}
            onChange={handleInputChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type='text'
            name='mobile'
            placeholder='Phone'
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
          <input
            type='text'
            name='whenCanYouPlanAVisit'
            placeholder='Plan A Visit On!'
            value={formData.whenCanYouPlanAVisit}
            onChange={handleInputChange}
            required
          />
          <input
            type='text'
            name='message'
            placeholder='Message'
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button type='submit' className='submit-button'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default MidForm;
