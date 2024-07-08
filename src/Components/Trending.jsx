import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsCard from './ProjectsCard';
import '../App.css';
import trending from "../Images/Icons/trending.png";

const projectData = 
[
  {
    
    "projectName": "Signature Global Titanium SPR",
    "projectAddress": "Sector 71, Southern Peripheral Road",
    "city": "Gurgaon",
    "frontImage": {
      "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1719572014/Signature-71/Titanium_SPR_mt4kgd.jpg"
    },"possession":"2029",
    
     
  },
  {
    "possession":"2029",
    "frontImage": {
         "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716550989/M3M-Altitude/bannerM3MAltitude_hy6wq5.jpg"
    },
    "projectName": "M3M Altitude",
    "projectAddress": "Sector 65, Golf Course Extn Road",
    "city": "Gurgaon"
  },
  {
    "possession":"2029",
    "frontImage": {
      
        "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1719575590/Ganga-Fusion-85_r0gcfv.jpg"
    },
    "projectName": "Ganga Realty Fusion 85",
    "projectAddress": "Sector 85, Dwarka Expressway",
    "city": "Gurgaon",
    "project_Status": "comingsoon"
  },
  {
    "projectName": "Krisumi Waterside Residences",
    "projectAddress": "Sector 36A, Dwarka Expressway",
    "city": "Gurgaon",
    "possession":"2029",
    "frontImage": {
      "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1719575922/1709988337158_deprax.png"
    }
  },
  {
    "frontImage": {
        "public_id": "realtyshopee/project/r9ogecjzjckzyzkonezl",
        "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716555467/Omaxe19B/fsshjjpg4asp21r0b3bn.jpg_piwyjg.jpg"
    },
    "projectName": "Omaxe State",
    "projectAddress": "Sector 19B, Dwarka",
    "city": "Delhi",
    "possession":"2029"
},
{
    "frontImage": {
        "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716619813/Ganga-Realty-Nandaka/bannerImage_wijhay.jpg"
    },
    "projectName": "Ganga Realty Nandaka",
    "projectAddress": "Sector 84, Dwarka Expressway",
    "city": "Gurgaon",
    "possession":"2030"
},
{
    "frontImage": {
        "public_id": "realtyshopee/project/r9ogecjzjckzyzkonezl",
        "url": "https://www.aiplprojects.in/aipl-assets/images/aipl-joy-gallery/gallery-3.webp"
    },
    "projectName": "AIPL Joy Gallery",
    "projectAddress": "Sector 66, Golf Course Extension Road",
    "city": "Gurgaon",
    
    "possession":"2024"
},
{
    "frontImage": {
        "public_id": "realtyshopee/project/r9ogecjzjckzyzkonezl",
        "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716625012/SS-Whitewater/Project-Photo-4-SS-Whitewater-Gurgaon-5419149_778_1200_310_462_tvsqk3.jpg"
    },
    "projectName": "SS WHITEWATER",
    "projectAddress": "Sector 90",
    "city": "Gurgaon",
    "possession":"2028"
},
];






function Trending() {
  return (
    <div className="trending-section bt">
      <h4>
        <img src={trending} alt="trending" className='section-icon' />Trending Projects
        <img src={trending} alt="trending" className='section-icon' />
      </h4>
      <div className="projects-container">
        {projectData.map((project) => (
          <Link key={project.projectName} to={`/property/${project.projectName}`} className='projects-c-a'>
            <ProjectsCard
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
  );
}

export default Trending;
