import React from 'react'
import ProjectsCard from './ProjectsCard';
import '../App.css';
import resIcon from "../Images/Icons/home.png"
const projectData=[
  {
    projectName: "Trehan 71",
    projectAddress: "Sector 71, Gurgaon",
    possession: "2023",
    city: "Gurgaon",
    frontImage: {
      url: ""
    }
  },

    ]

function Residential() {
  return (
    <div className="residential-projects bt">
    <h4><img src={resIcon} alt="Residential" className='section-icon'/>Residential Properties<img src={resIcon} alt="Residential" className='section-icon'/></h4>
    <hr />
    <div className="projects-container">
         {projectData.map((project, index) => (
          <ProjectsCard
            key={index}
            projectName={project.projectName}
            projectAddress={project.projectAddress}
            possession={project.possession}
            city={project.city}
            frontImage={project.frontImage}
          />
        ))}
      </div>
    </div>
  )
}

export default Residential
