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

      <div className='description2-home'>
        {/* <h1>Discover the Most Suitable Property in Gurgaon</h1>
        <p>Find the best property in Gurgaon that suits you very easily and forget all the difficulties in finding a residence for you.</p> */}
        <h3>Your Next Step in Gurgaon Real Estate</h3>
        <p>Whether you're interested in a new launch property in Gurgaon, luxury properties, affordable housing, or commercial ventures. <br/>Realty Shopee simplifies your journey to owning or leasing property in Gurgaon. <br/>Explore our website for new upcoming properties, resale opportunities, and investments that fit your budget and aspirations.</p>
      </div>
      <div id="midform"><MidForm /></div>

      <div id="residential"><Residential /></div>

      <div id="commercial"><Commercial /></div>

      <div id="sco"><Sco /></div>

      <div id="location-wise"><LocationWise /></div>

      <h3>Connect with Realty Shopee Today</h3>
      <p>Begin the best property investment in Gurgaon with Realty Shopee today. Contact us to schedule a consultation with our experts and discover why we are the preferred choice for property seekers and investors alike. Let us help you find the best property in New Gurgaon that meets your needs and exceeds your expectations.</p>
      <p>Realty Shopee is dedicated to delivering exceptional service and unmatched expertise in Gurgaon's competitive real estate market. Whether you're looking to buy, sell, lease, or invest in an affordable or luxury property in Gurgaon, trust Realty Shopee to make your property goals a reality. Start your journey with us and experience the difference in real estate excellence.</p>
      <p>Contact Realty Shopee now to buy a luxury or cheap property in Gurgaon for sale and unlock the doors to your future in this thriving real estate landscape.</p>
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