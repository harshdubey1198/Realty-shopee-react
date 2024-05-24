import React from 'react'
import '../App.css';
import comIcon from "../Images/Icons/company.png"
function Commercial() {
  return (
    <div className="commercial-projects bt">
     <h4>
        <img src={comIcon} alt="" className='section-icon'/>
        Commercial Properties
        <img src={comIcon} alt="" className='section-icon'/>
      </h4>
    </div>
  )
}

export default Commercial
