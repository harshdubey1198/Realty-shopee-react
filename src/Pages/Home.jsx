import React, { useState, useEffect } from 'react';
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
import ScrollToTop from '../Components/ScrollToTop';

const Home = () => {
  const [pageTitle, setPageTitle] = useState("Discover The Best Luxury Property in Gurgaon with Realty Shopee");
  const [pageDescription, setPageDescription] = useState("Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.");
  const [ogImageUrl, setOgImageUrl] = useState("https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png");

  useEffect(() => {
    
    setPageTitle("Discover The Best Luxury Property in Gurgaon with Realty Shopee");
    setPageDescription("Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.");
    setOgImageUrl("https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png");
  }, []);

  return (
    <div className='home-main'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://www.realtyshopee.com/" />
        <link rel="icon" href="https://www.realtyshopee.com/agent.png" />
        <meta property="og:site_name" content="Realty Shopee" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://realtyshopee.com/" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="Realty Shopee"/>
        <meta name="twitter:type" content="website"/>
        <meta name="twitter:title" content={pageTitle}/>
        <meta name="twitter:description" content={pageDescription}/>
        <meta name="twitter:url" content="https://realtyshopee.com/" />
        <meta name="twitter:image" content={ogImageUrl} />
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
      <ScrollToTop/>
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