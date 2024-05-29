import React from 'react'
import scoIcon from "../Images/Icons/land.png"
import '../App.css'
import ProjectsCard from './ProjectsCard'
import { Link } from 'react-router-dom';

const projectData =[
  {
    projectName: "Aarize 69",
    projectAddress: "Sector 69, Golf Course Ext. Rd",
    possession: "2025",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716632494/Aarize-69/south-drive_pmyxkq.jpg"
    }
  },

  {
    projectName: "Orris 82a",
    projectAddress: "Sector 82, NH8",
    possession: "Ready To Move",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716630398/AIPL-JoySquare/AF1QipP1JpPdkBZidSmCNHPPWN5c-TQIjwj-gU9X63bX_s680-w680-h510_gxxkaj.jpg"
    }
  },{
    projectName: "EBD 83",
    projectAddress: "Sector 57,Golf Course Ext. Rd",
    possession: "2026",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716627555/Godrej-Zenith/image_z6cytu.jpg"
    }
  },{
    projectName: "Trevoc 56",
    projectAddress: "Sector 56 , Golf Course Ext. Road",
    possession: "2027",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716630604/AIPL-JoyDistrict/aipl-new-launch4_u6s7fr.jpg"
    }
  },
]


function Sco() {
  return (
    <div className="bt">
      <h4>
        <img src={scoIcon} alt="trending" className='section-icon'/>
            SCO Plots
        <img src={scoIcon} alt="trending" className='section-icon'/>
      </h4>

      <div className="projects-container">
        {projectData.map((project, index) => (  
        <Link key={project.projectName} to={`/projects/${project.projectName}`}>
          <ProjectsCard
            key={index}
            projectName={project.projectName}
            projectAddress={project.projectAddress}
            city={project.city}
            possession={project.possession}
            frontImage={project.frontImage}
          />    
        </Link>
                    ))}
      </div>

    </div>
  )
}

export default Sco
