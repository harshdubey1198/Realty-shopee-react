import React from 'react'
import '../App.css';
import comIcon from "../Images/Icons/company.png"
import ProjectsCard from './ProjectsCard';
import { Link } from 'react-router-dom';

const projectData=[
  {
    projectName: "Satya The Hive",
    projectAddress: "Sector 102, Dwarka Expressway",
    possession: "Ready To Move",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716630169/Satya-TheHIve/0002_yaf4tp.jpg"
    }
  },

  {
    projectName: "AIPL Joy Square",
    projectAddress: "Sector 63a, Kadarpur Rd",
    possession: "Ready To Move",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716630398/AIPL-JoySquare/AF1QipP1JpPdkBZidSmCNHPPWN5c-TQIjwj-gU9X63bX_s680-w680-h510_gxxkaj.jpg"
    }
  },{
    projectName: "M3M Paragon 57",
    projectAddress: "Sector 57,Golf Course Ext. Rd",
    possession: "2026",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716627555/Godrej-Zenith/image_z6cytu.jpg"
    }
  },{
    projectName: "AIPL Joy District",
    projectAddress: "Sector 88 , Dwarka Expressway",
    possession: "2028",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716630604/AIPL-JoyDistrict/aipl-new-launch4_u6s7fr.jpg"
    }
  },
]

function Commercial() {
  return (
    <div className="commercial-projects bt">
     <h4>
        <img src={comIcon} alt="" className='section-icon' loading='lazy'/>
        Commercial Properties
        <img src={comIcon} alt="" className='section-icon'  loading='lazy'/>
      </h4>
      <div className="projects-container">
         {projectData.map((project, index) => (
          <Link key={project.projectName} to={`/projects/${project.projectName}`} className='projects-c-a'>
          <ProjectsCard
            key={index}
            projectName={project.projectName}
            projectAddress={project.projectAddress}
            possession={project.possession}
            city={project.city}
            frontImage={project.frontImage}
          />
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Commercial
