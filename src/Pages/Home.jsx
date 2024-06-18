import React from 'react';
import Banner from '../Components/Banner';
import '../App.css';
import Trending from '../Components/Trending';
import UpcomingProjects from '../Components/UpcomingProjects';
import Residential from '../Components/Residential';
import Commercial from '../Components/Commercial';
import Sco from '../Components/Sco';
import LocationWise from '../Components/LocationWise';
import ContactUs from '../Components/ContactUs';
import Navbar from '../Components/Navbar';
import SocialBar from "../Components/SocialBar"
import MidForm from '../Components/MidForm';
import MiddleInfo from '../Components/MiddleInfo';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className='home-main'>
       <Helmet>
        <link rel="canonical" href="https://www.realtyshopee.com/" />
        <title>Home - Realty Shopee</title>
      </Helmet>
      <Navbar/>
      <SocialBar />
      <div id="home"><Banner /></div>
      <div id="trending"><Trending /></div>
      <div id="midinfo"><MiddleInfo /></div>
      <div id="upcoming"><UpcomingProjects /></div>
      <div id="midform"><MidForm /></div>
      <div id="residential"><Residential /></div>
      <div id="commercial"><Commercial /></div>
      <div id="sco"><Sco /></div>
      <div id="location-wise"><LocationWise /></div>
      <div id='contact-us'><ContactUs/></div>
    </div>
  );
}

export default Home;
