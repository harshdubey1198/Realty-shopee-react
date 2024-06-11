import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import '../App.css';

function AddProject() {
    const [form, setForm] = useState({
        username: '',
        projectName: '',
        propertyAddress: '',
        floor: '',
        areaForSale: '',
        rentOrSale:'',
        mobile:'',
        propertyimages:''
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://realty-react-backend.onrender.com/add-property', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await response.json();
            console.log('Response:', data); 
            if (response.ok) {
                alert('Property added successfully!');
            } else {
                console.error('Add Property Failed:', data.message);
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const isFormValid = () => {
        return form.projectName && form.propertyAddress && form.floor && form.areaForSale && form.rentOrSale && form.mobile;
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
            <h2>Add Property</h2>
            <form>
                <input type="text" name="projectName" placeholder="Project Name" value={form.projectName} onChange={handleChange} required />
                <input type="text" name="propertyAddress" placeholder="Property Address" value={form.propertyAddress} onChange={handleChange} required />
                <input type="text" name="floor" placeholder="Floor Number" value={form.floor} onChange={handleChange} required />
                <input type="text" name="areaForSale" placeholder="Area For Sale" value={form.areaForSale} onChange={handleChange} required />
                <div className="radio-sr">
                    <input type="radio" id="rent" name="rentOrSale" value="Rent" onChange={handleChange} required />
                    <label htmlFor="rent">Rent</label>
                    <input type="radio" id="sale" name="rentOrSale" value="Sale" onChange={handleChange} required />
                    <label htmlFor="sale">Sale</label>
                </div>
                <input type='number' name='mobile' placeholder='Enter Your Mobile Number' value={form.mobile} onChange={handleChange} required/>
                <input type='file' />
            </form>
                <button type="button" onClick={handleEmptySubmission}>Add Property</button>
            <Footer />
        </div>
    );
}

export default AddProject;
