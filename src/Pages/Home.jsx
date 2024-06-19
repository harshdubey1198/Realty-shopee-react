import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Components/Banner';
import Trending from '../Components/Trending';
import UpcomingProjects from '../Components/UpcomingProjects';
import Residential from '../Components/Residential';
import Commercial from '../Components/Commercial';
import Sco from '../Components/Sco';
import LocationWise from '../Components/LocationWise';
import ContactUs from '../Components/ContactUs';
import Navbar from '../Components/Navbar';
import SocialBar from "../Components/SocialBar";
import MidForm from '../Components/MidForm';
import MiddleInfo from '../Components/MiddleInfo';

const Home = () => {
  return (
    <div className='home-main'>
      <Helmet>
        <title>Realty Shopee | 9289252999 | Sachin Gupta | The Best Property Consultant In Gurgaon</title>
        <meta charSet='utf-8' />
        <meta name="description" content="Realty Shopee is a real estate website where you can buy, sell and rent properties. We are the best real estate consultants in Delhi NCR." />
        <link rel="canonical" href="https://www.realtyshopee.com/home" />
      </Helmet>
      <Navbar />
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
      <div id='contact-us'><ContactUs /></div>
    </div>
  );
}

export default Home;
