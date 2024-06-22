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
import DescriptionFirst from '../Components/DescriptionFirst';
import DescriptionSecond from '../Components/DescriptionSecond';
import DescriptionThird from '../Components/DescriptionThird';

const Home = () => {
  return (
    <div className='home-main'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Discover The Best Luxury Property in Gurgaon with Realty Shopee</title>
        <meta name="description" content="Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city." />
        <link rel="canonical" href="https://www.realtyshopee.com/" />
      </Helmet>
      <Navbar />
      <SocialBar />
      <div id="home"><Banner /></div>

      <div id="descfirst"><DescriptionFirst /></div>

      <div id="trending"><Trending /></div>

      <div id="midinfo"><MiddleInfo /></div>

      <div id="upcoming"><UpcomingProjects /></div>

      <div id="descsecond"><DescriptionSecond /></div>
      
      <div id="midform"><MidForm /></div>

      <div id="residential"><Residential /></div>

      <div id="commercial"><Commercial /></div>

      <div id="sco"><Sco /></div>

      <div id="location-wise"><LocationWise /></div>
      
      <div id="desc-third"><DescriptionThird /></div>

      <div id='contact-us'><ContactUs /></div>
    </div>
  );
}

export default Home;


// {/* <ScrollContainer>
// <ScrollPage>
//   <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
//     <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
//   </Animator>
// </ScrollPage>
// <ScrollPage>
//   <Animator animation={ZoomInScrollOut}>
//     <span style={{ fontSize: "40px" }}>I'm ZoomInScrollOut ✨</span>
//   </Animator>
// </ScrollPage>
// <ScrollPage>
//   <Animator animation={FadeUp}>
//     <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
//   </Animator>
// </ScrollPage>
// <ScrollPage>
//   <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
//     <span style={{ fontSize: "40px" }}>
//       <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
//       <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
//       - I'm Dante Chun -
//       <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
//       <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
//     </span>
//   </div>
// </ScrollPage>
// <ScrollPage>
//   <Animator animation={batch(Fade(), Sticky())}>
//     <span style={{ fontSize: "40px" }}>Done</span>
//     <br/>
//     <span style={{ fontSize: "30px" }}>
//       There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
//     </span>
//   </Animator>
// </ScrollPage>
// </ScrollContainer> */}