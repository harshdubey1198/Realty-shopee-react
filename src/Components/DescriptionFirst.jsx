import React, { useEffect, useState } from 'react';
import '../App.css';

function DescriptionFirst() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://res.cloudinary.com/dgplzytrq/image/upload/v1718972634/Description%20Images/Residential-property.jpg',
    'https://res.cloudinary.com/dgplzytrq/image/upload/v1718972783/Description%20Images/Commercial-Property.jpg',
    'https://res.cloudinary.com/dgplzytrq/image/upload/v1718972824/Description%20Images/SCO-plots.jpg',
    'https://res.cloudinary.com/dm5yrsqdc/image/upload/v1711005132/100acre/project/fldpjxxgb6hkw2q7umvz.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='description1-home'>
      <div className='image-des1'>
        <img src={images[currentImage]} alt={`Carousel ${currentImage + 1}`} />
      </div>
      <div className='content-des1'>
        <h2>Explore Premier Residential, Commercial, and SCO Properties</h2>
        <p>
          Discover the finest property in Gurgaon with Realty Shopee, your trusted property management company in Gurgaon. Whether you're searching for a dream home, a strategic commercial space, or a lucrative SCO (Shop-Cum-Office), we cater to all your property needs in this dynamic city.
       <br/><br/>
          As the best property dealer in Gurgaon, we pride ourselves on offering a diverse portfolio of properties to our clients. Our residential listings span from luxurious apartments in prime neighborhoods to affordable homes that meet every budget. For businesses looking to establish themselves, our commercial properties provide strategic locations and modern amenities. Additionally, our SCO properties offer versatile spaces designed to accommodate both retail and office needs, ensuring your business thrives in Gurgaon's competitive landscape.
        </p>
      </div>
    </div>
  );
}

export default DescriptionFirst;
