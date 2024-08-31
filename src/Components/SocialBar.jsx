import React from 'react'
import facebook from '../Images/Social-Icons/facebook.png'
import instagram from '../Images/Social-Icons/Instagram.webp'
import twitter from '../Images/Social-Icons/twitter.png'
import whatsapp from '../Images/Social-Icons/whatsapp.png'
import linkedin from '../Images/Social-Icons/linkedin.png'




function SocialBar() {
  return (
    <div className="social-media open">
      <a href="https://wa.me/+919289252999" target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp"/></a>
      <a href="https://www.facebook.com/realtyshopee/" target="_blank" rel="noreferrer"><img src={facebook} alt='facebook'/></a>
      <a href="https://www.linkedin.com/company/14476428" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>
      <a href="https://twitter.com/Sachin_Gupta_11" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter"/></a>
      <a href="https://www.instagram.com/_realty_shopee_/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"/></a>
    </div>
  );
}

export default SocialBar
