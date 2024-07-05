import React from 'react';
import ProjectsCard from './ProjectsCard';
import '../App.css';
import comingsoon from "../Images/Icons/coming-soon.png"
import { Link } from 'react-router-dom';

const projectData = [
  {
    "projectName": "Ashiana Amarah",
    "projectAddress": "Sector 93, New Gurgaon",
    "city": "Gurgaon",
    "frontImage": {
      "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1720175152/Ashiana%20Amarah/pgqaciwrwyqogvkvkgir_vnsbgh.jpg"
    },
    "possession":"2029",
  },
  {
    "frontImage": {
        "public_id": "realtyshopee/project/f4si8cfqile0q0oiv4ub",
        "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716557243/Trevoc56/bannerTrevoc56_ks2yc7.jpg"
    },
    "projectName": "Trevoc 56",
    "projectAddress": "Sector 56, Golf Course Road",
    "city": "Gurgaon",
    "possession":"2029"
  },
  {    
    "possession":"2029",
    "frontImage": {
      "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1719575590/Ganga-Fusion-85_r0gcfv.jpg"
    },
    "projectName": "Ganga Realty Fusion 85",
    "projectAddress": "Sector 85, Dwarka Expressway",
    "city": "Gurgaon"
  },
  {
      "possession":"2029",
      "projectName": "Godrej 103",
      "projectAddress": "Sector 71, Southern Peripheral Road",
      "city": "Gurgaon",
      "frontImage": {
          "url": "https://www.noidacommercial.com/wp-content/uploads/2024/05/godrej-sector-103-gurgaon-photos.png"
        }
    },
    {    
      "possession":"2028",
      "projectName": "Krisumi Waterside Residences",
      "projectAddress": "Sector 36A, Dwarka Expressway",
      "city": "Gurgaon",
      "frontImage": {
        "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1719575922/1709988337158_deprax.png"
      }
    },
  {
    "possession":"2029",
    "projectName": "Tarc Ishva",
    "projectAddress": "Sector 63A, Southern Peripheral Road",
    "city": "Gurgaon",
    "frontImage": {
        "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1719572417/Tarc/ishwa5_jehaxi.webp"
    }
    },
  {
    "possession":"2029",
    "projectName": "Central Park 103",
    "projectAddress": "Sector 103, Dwarka Expressway",
    "city": "Gurgaon",
    "frontImage": {
      "url": "https://images.skyscrapercenter.com/building/thecentralparki_ext-overallviewofsouth_(c)hok.jpg"
    }
  },
  {
    "possession":"2029",
    "projectName": "Whiteland 103",
    "projectAddress": "Sector 103, Dwarka Expressway",
    "city": "Gurgaon",
    "frontImage": {
      "url": "https://whitelandaspenone.in/images/slide2.webp"
    }
  },
];

function UpcomingProjects() {
  return (
    <div className="upcoming-section bt">
      <h4> <img src={comingsoon} alt="Coming Soon" className='section-icon' />Upcoming Projects <img src={comingsoon} alt="Coming Soon" className='section-icon' /></h4>
      {/* <hr /> */}
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
  );
}

export default UpcomingProjects;
