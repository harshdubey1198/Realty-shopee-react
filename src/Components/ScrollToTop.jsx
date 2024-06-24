import React from 'react';
import '../App.css';
import { BiSolidUpArrowSquare } from "react-icons/bi";

function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='scroll-to-top' onClick={handleClick}>
      <BiSolidUpArrowSquare />
    </div>
  );
}

export default ScrollToTop;
