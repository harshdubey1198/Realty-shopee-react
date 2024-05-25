import React from 'react'
import ProjectsCard from './ProjectsCard';
import '../App.css';
import resIcon from "../Images/Icons/home.png"
const projectData=[
  {
    projectName: "Puri Diplomatic Greens",
    projectAddress: "Sector 111, Dwarka Expressway",
    possession: "2030",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716629625/Puri-Diplomatic-Greens/xzfoqnixe5nzmd2ripze.jpg"
    }
  },

  {
    projectName: "BPTP Amaario",
    projectAddress: "Sector 37D, Dwarka Expressway",
    possession: "2024",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716625590/BPTP-Amaario/115203.BPTP-Unveils-The-Amaario_-Eyes-a-Revenue-Potential-of-Rs.-1500-Crore-in-Sector-37D_-Gurugram_ppve1k.jpg"
    }
  },{
    projectName: "Godrej Zenith",
    projectAddress: "Sector 89, Dwarka Expressway",
    possession: "2027",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716627555/Godrej-Zenith/image_z6cytu.jpg"
    }
  },{
    projectName: "Smart World 1 DXP",
    projectAddress: "Sector 113 , Dwarka Expressway",
    possession: "2028",
    city: "Gurgaon",
    frontImage: {
      url: "https://res.cloudinary.com/dgplzytrq/image/upload/v1716629870/Smart-World-1-DXP/2_bhk_apartment-for-sale-sector_113-Gurgaon-others_bvjq1n.webp"
    }
  },
    ]

function Residential() {
  return (
    <div className="residential-projects bt">
    <h4><img src={resIcon} alt="Residential" className='section-icon'/>Residential Properties<img src={resIcon} alt="Residential" className='section-icon'/></h4>
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
