import React from 'react';
import Banner from '../Components/Banner';
import '../App.css';
import Trending from '../Components/Trending';
import UpcomingProjects from '../Components/UpcomingProjects';
import Residential from '../Components/Residential';
import Commercial from '../Components/Commercial';
import Sco from '../Components/Sco';
import Featured from '../Components/Featured';
import LocationWise from '../Components/LocationWise';

function Home() {
  return (
    <div className='home-main'>
      <div id="home"><Banner /></div>
      <div id="trending"><Trending /></div>
      <div id="upcoming"><UpcomingProjects /></div>
      <div id="residential"><Residential /></div>
      <div id="commercial"><Commercial /></div>
      <div id="sco"><Sco /></div>
      <div id="featured"><Featured /></div>
      <div id="location-wise"><LocationWise /></div>

    </div>
  );
}

export default Home;
