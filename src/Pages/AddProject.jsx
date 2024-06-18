import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import companylogo from "../Images/Realty shopee main logo.png";
import '../App.css';
import { Link } from 'react-router-dom';
import { CiMobile3 } from "react-icons/ci";
import { Helmet } from 'react-helmet';

function AddProject() {
    const [form, setForm] = useState({
        username: '',
        projectName: '',
        propertyAddress: '',
        floor: '',
        areaForSale: '',
        areaUnit: 'sqft',
        rentOrSale: '',
        mobile: '',
        estimatedBudget: '',
        propertyimages: []
    });

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) {
            setForm(prevForm => ({ ...prevForm, username }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        const base64Images = await Promise.all(files.map(fileToBase64));
        setForm({ ...form, propertyimages: base64Images });
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            for (const key in form) {
                if (key === 'propertyimages') {
                    form[key].forEach(image => {
                        formData.append('propertyimages', image);
                    });
                } else {
                    formData.append(key, form[key]);
                }
            }

            const response = await fetch('https://realty-react-backend.onrender.com/property/add', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }

            const data = await response.json();
            console.log('Response:', data);
            alert('Property added successfully!');
        } catch (error) {
            console.error('Error:', error.message || error);
            alert('An error occurred. Please try again.');
        }
    };

    const isFormValid = () => {
        return form.projectName && form.propertyAddress && form.floor && form.areaForSale && form.rentOrSale && form.mobile && form.estimatedBudget;
    };

    const handleEmptySubmission = (e) => {
        if (!isFormValid()) {
            e.preventDefault(); // Prevent the form from submitting
            alert('Please fill in all fields before submitting.');
        } else {
            handleSubmit(e);
        }
    };

    return (
        <div className='a-p-main'>
            <Helmet>
                <link rel="canonical" href={`https://www.realtyshopee.com/addproperties`} />
                <title>Add Your Property - Realty Shopee</title>
            </Helmet>
            <header>
                <a href="https://realtyshopee.com">
                    <img src={companylogo} alt='realty-shopee-logo' />
                </a>
                <div className='a-p-nav-btns'>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/contactus"><button>Contact Us</button></Link>
                    <Link to="/login"><button>Login</button></Link>
                </div>
            </header>

            <h2>Add Property</h2>
            <form onSubmit={handleEmptySubmission}>
                <input type="text" name="projectName" placeholder="Project Name" value={form.projectName} onChange={handleChange} required />
                <input type="text" name="propertyAddress" placeholder="Property Address" value={form.propertyAddress} onChange={handleChange} required />
                <input type="text" name="floor" placeholder="Floor Number" value={form.floor} onChange={handleChange} required />
                <div className="area-for-sale">
                    <input type="number" name="areaForSale" placeholder="Area For Sale" value={form.areaForSale} onChange={handleChange} required />
                    <select name="areaUnit" value={form.areaUnit} onChange={handleChange} required>
                        <option value="sqft">Sq ft</option>
                        <option value="sqyards">Sq Yards</option>
                        <option value="gaj">Gaj</option>
                        <option value="acre">Acre</option>
                    </select>
                </div>
                <div className="radio-sr">
                    <input type="radio" id="rent" name="rentOrSale" value="Rent" onChange={handleChange} required />
                    <label htmlFor="rent">Rent</label>
                    <input type="radio" id="sale" name="rentOrSale" value="Sale" onChange={handleChange} required />
                    <label htmlFor="sale">Sale</label>
                </div>
                <div className='div-number'>
                    <input type='number' name='mobile' placeholder='Enter Your Mobile Number' value={form.mobile} onChange={handleChange} required />
                    <div className='mob-symbol'>
                        <CiMobile3 />
                    </div>
                </div>
                <div className='div-budget'>
                    <input type="number" className="input-number" name="estimatedBudget" placeholder="Enter Your Estimated Budget" value={form.estimatedBudget} onChange={handleChange} required />
                    <span className='₹-symbol'>₹</span>
                </div>

                <input type='file' name="propertyimages" multiple onChange={handleFileChange} accept="image/*" />
                <button type="submit">Add Property</button>
            </form>
            <Footer />
        </div>
    );
}

export default AddProject;
