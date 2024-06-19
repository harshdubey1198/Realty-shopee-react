import React, { useState } from 'react';
import "./Contact.css";
import formImage from "../Images/SideHustle/Contact us.gif";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ContactUs() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        clientName: "",
        email: "",
        mobile: "",
        whenCanYouPlanAVisit: "",
        preferredProject: "",
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
                "https://realty-react-backend.onrender.com/query-form",
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
                    whenCanYouPlanAVisit: "",
                    preferredProject: "",
                    message: ""
                });
            } else {
                console.error("Failed to submit form:", response.statusText);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className='contact-us-page'>
         <Helmet>
            <meta charSet='utf-8' />
            <link rel="canonical" href="https://www.realtyshopee.com/contactus" />
            <title>Contact Us - Realty Shopee</title>
            <meta name="description" content="This is a description of the about page"/>
         </Helmet>
            <h1>Contact Us</h1>
            <form className='div-form' onSubmit={handleSubmit}>
                <div className='svg-container'>
                    <img src={formImage} alt="Contact Us" />
                </div>
                <div className='contact-form'>
                    <div className='form-group'>
                        <label htmlFor='clientName'>Name</label>
                        <input
                            type='text'
                            id='clientName'
                            name='clientName'
                            value={formData.clientName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='mobile'>Mobile</label>
                        <input
                            type='text'
                            id='mobile'
                            name='mobile'
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='whenCanYouPlanAVisit'>Schedule A Free Visit!</label>
                        <input
                            type='text'
                            id='whenCanYouPlanAVisit'
                            name='whenCanYouPlanAVisit'
                            value={formData.whenCanYouPlanAVisit}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='preferredProject'>Interested In</label>
                        <select
                            id='preferredProject'
                            name='preferredProject'
                            value={formData.preferredProject}
                            onChange={handleInputChange}
                        >
                            <option value=''>Select Project</option>
                            <option value='M3M'>M3M Projects</option>
                            <option value='Signature'>Signature Projects</option>
                            <option value='Omaxe'>Omaxe Projects</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <input
                            type='text'
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type='submit' className='submit-button'>Submit</button>
                </div>
            </form>
            <button onClick={handleClick} className='explore'>Explore More</button>
        </div>
    );
}

export default ContactUs;
