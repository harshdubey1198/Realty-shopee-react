import React from 'react'
import ProjectsCard from './ProjectsCard';
import '../App.css';
import { Link } from 'react-router-dom';
import resIcon from "../Images/Icons/home.png"
const projectData=[
  {
    "projectName": "Puri Diplomatic Greens",
    "projectAddress": "Sector 111, Dwarka Expressway",
    "possession": "2030",
    "city": "Gurgaon",
    "frontImage": {
      "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716629625/Puri-Diplomatic-Greens/xzfoqnixe5nzmd2ripze.jpg"
    },
    "logo": {
      "public_id": "100acre/project/r40ya2h42wugr0wkgux1",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601318/100acre/project/r40ya2h42wugr0wkgux1.png"
  },
  "project_locationImage": {
      "public_id": "100acre/project/cyhxhs7mcjawuhtp7rda",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601288/100acre/project/cyhxhs7mcjawuhtp7rda.jpg"
  },
  "highlightImage": {
      "public_id": "100acre/project/dbla5rbmnnqmqpa9jjsv",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601599/100acre/project/dbla5rbmnnqmqpa9jjsv.jpg"
  },
  "projectMaster_plan": {
      "public_id": "100acre/project/khfgyucvghcjmhbrdhhe",
      "url": "http://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601383/100acre/project/khfgyucvghcjmhbrdhhe.jpg"
  },
  "_id": "663752acdf6f5a16378c95a5",
  "project_floorplan_Image": [
      {
          "public_id": "100acre/project/bswmkcc37btprqrqj6qv",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901671/100acre/project/bswmkcc37btprqrqj6qv.jpg"
      },
      {
          "public_id": "100acre/project/j7zxk8spkuniouxeou5d",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901672/100acre/project/j7zxk8spkuniouxeou5d.jpg"
      },
      {
          "public_id": "100acre/project/wmyqravz8eplntvlagyf",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901673/100acre/project/wmyqravz8eplntvlagyf.jpg"
      }
  ],
  "state": "Haryana",

  "project_discripation": "M3M Altitude, an outstanding residential property situated in the heart of Sector 65, Gurgaon. This premium residential development sets new standards of opulence with its exquisite luxury apartments and an extensive array of world-class facilities and amenities. Designed to cater to the discerning tastes of modern homeowners, this development redefines luxury living with its unparalleled blend of elegance, comfort, and convenience.",
  "projectRedefine_Connectivity": [
      "Situated on 60 metre wide main arterial Sector road"
  ],
  "projectRedefine_Entertainment": [
      "Prominently located on Southern Peripheral Road (Golf Course Extension Road) one of the widest roads in Gurgaon (90 meters wide) and recently announced as NH 236"
  ],
  "projectRedefine_Business": [
      "Strategically linked to all major Business Hubs & Retail destinations"
  ],
  "projectRedefine_Education": [
      "Just 30 minute drive from Delhi International Airport"
  ],
  "meta_description": "M3M Altitude Apartments in Sector 65 were designed to be visually appealing, captivating the senses and enhancing the living experience of its residents",
  "meta_title": "M3M Altitude Sector 65 Gurgaon | Luxury Apartments",
  "Amenities": [
      "Car Parking"
  ],
  "projectBgContent": "M3M Altitude - Luxury Residences in Sector 65 Gurgaon",
  "projectReraNo": "Applied",
  "type": "Residential Flats",
  "builderName": "M3M India",
  "AboutDeveloper": "M3M India means 'Superbness in the Trinity Of Men, Materials and Money'. The aphorism of the organization is \"quality, opportune conveyance and greatness\". Recognizing highlights of M3M inside the business are its inventive, remarkable and unrivaled ideas, multi-dimensional realty arrangements and unparalleled high help norms. Demonstrating its responsibility towards creating cutting edge land works of art, M3M has consistently strived to gather the best ability in the business. The organization has increased important involvement with the land area with different and complimentary gifts from a rich organization of first class go-betweens, monetary establishments, high-total assets people and probably the most rumored designers in India.",
  "projectOverview": "trending",
  "project_Status": "newlunch",
  "schema_type": "project",
  "project_url": "m3m-altitude",
  "projectGallery": [
      {
          "public_id": "100acre/project/jtveoh1dzgwgeai05s8n",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601506/100acre/project/jtveoh1dzgwgeai05s8n.jpg"
      },
      {
          "public_id": "100acre/project/znqldmnn2ghf4vwveth6",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601507/100acre/project/znqldmnn2ghf4vwveth6.jpg"
      },
      {
          "public_id": "100acre/project/rj3utomwptzpznbftqyz",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601508/100acre/project/rj3utomwptzpznbftqyz.jpg"
      }
  ],
  "BhK_Details": [
      {
          "bhk_type": "3 BHK + SR",
          "price": "Call for Price",
          "bhk_Area": "3755 SQ.FT.",
          "_id": "66375706df6f5a16378c9ca6"
      },
      {
          "bhk_type": "4 BHK + SR",
          "price": "Call for Price",
          "bhk_Area": "4270 SQ.FT.",
          "_id": "66375717df6f5a16378c9caa"
      }
  ],
  "highlight": [],
  "createdAt": "2024-05-05T09:34:36.735Z",
  "updatedAt": "2024-05-13T12:00:00.096Z",
  "__v": 0

  },

  {
    "projectName": "BPTP Amaario",
    "projectAddress": "Sector 37D, Dwarka Expressway",
    "possession": "2024",
    "city": "Gurgaon",
    "frontImage": {
      "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716625590/BPTP-Amaario/115203.BPTP-Unveils-The-Amaario_-Eyes-a-Revenue-Potential-of-Rs.-1500-Crore-in-Sector-37D_-Gurugram_ppve1k.jpg"
    },
    "logo": {
      "public_id": "100acre/project/r40ya2h42wugr0wkgux1",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601318/100acre/project/r40ya2h42wugr0wkgux1.png"
  },
  "project_locationImage": {
      "public_id": "100acre/project/cyhxhs7mcjawuhtp7rda",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601288/100acre/project/cyhxhs7mcjawuhtp7rda.jpg"
  },
  "highlightImage": {
      "public_id": "100acre/project/dbla5rbmnnqmqpa9jjsv",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601599/100acre/project/dbla5rbmnnqmqpa9jjsv.jpg"
  },
  "projectMaster_plan": {
      "public_id": "100acre/project/khfgyucvghcjmhbrdhhe",
      "url": "http://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601383/100acre/project/khfgyucvghcjmhbrdhhe.jpg"
  },
  "_id": "663752acdf6f5a16378c95a5",
  "project_floorplan_Image": [
      {
          "public_id": "100acre/project/bswmkcc37btprqrqj6qv",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901671/100acre/project/bswmkcc37btprqrqj6qv.jpg"
      },
      {
          "public_id": "100acre/project/j7zxk8spkuniouxeou5d",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901672/100acre/project/j7zxk8spkuniouxeou5d.jpg"
      },
      {
          "public_id": "100acre/project/wmyqravz8eplntvlagyf",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901673/100acre/project/wmyqravz8eplntvlagyf.jpg"
      }
  ],
  "state": "Haryana",

  "project_discripation": "M3M Altitude, an outstanding residential property situated in the heart of Sector 65, Gurgaon. This premium residential development sets new standards of opulence with its exquisite luxury apartments and an extensive array of world-class facilities and amenities. Designed to cater to the discerning tastes of modern homeowners, this development redefines luxury living with its unparalleled blend of elegance, comfort, and convenience.",
  "projectRedefine_Connectivity": [
      "Situated on 60 metre wide main arterial Sector road"
  ],
  "projectRedefine_Entertainment": [
      "Prominently located on Southern Peripheral Road (Golf Course Extension Road) one of the widest roads in Gurgaon (90 meters wide) and recently announced as NH 236"
  ],
  "projectRedefine_Business": [
      "Strategically linked to all major Business Hubs & Retail destinations"
  ],
  "projectRedefine_Education": [
      "Just 30 minute drive from Delhi International Airport"
  ],
  "meta_description": "M3M Altitude Apartments in Sector 65 were designed to be visually appealing, captivating the senses and enhancing the living experience of its residents",
  "meta_title": "M3M Altitude Sector 65 Gurgaon | Luxury Apartments",
  "Amenities": [
      "Car Parking"
  ],
  "projectBgContent": "M3M Altitude - Luxury Residences in Sector 65 Gurgaon",
  "projectReraNo": "Applied",
  "type": "Residential Flats",
  "builderName": "M3M India",
  "AboutDeveloper": "M3M India means 'Superbness in the Trinity Of Men, Materials and Money'. The aphorism of the organization is \"quality, opportune conveyance and greatness\". Recognizing highlights of M3M inside the business are its inventive, remarkable and unrivaled ideas, multi-dimensional realty arrangements and unparalleled high help norms. Demonstrating its responsibility towards creating cutting edge land works of art, M3M has consistently strived to gather the best ability in the business. The organization has increased important involvement with the land area with different and complimentary gifts from a rich organization of first class go-betweens, monetary establishments, high-total assets people and probably the most rumored designers in India.",
  "projectOverview": "trending",
  "project_Status": "newlunch",
  "schema_type": "project",
  "project_url": "m3m-altitude",
  "projectGallery": [
      {
          "public_id": "100acre/project/jtveoh1dzgwgeai05s8n",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601506/100acre/project/jtveoh1dzgwgeai05s8n.jpg"
      },
      {
          "public_id": "100acre/project/znqldmnn2ghf4vwveth6",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601507/100acre/project/znqldmnn2ghf4vwveth6.jpg"
      },
      {
          "public_id": "100acre/project/rj3utomwptzpznbftqyz",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601508/100acre/project/rj3utomwptzpznbftqyz.jpg"
      }
  ],
  "BhK_Details": [
      {
          "bhk_type": "3 BHK + SR",
          "price": "Call for Price",
          "bhk_Area": "3755 SQ.FT.",
          "_id": "66375706df6f5a16378c9ca6"
      },
      {
          "bhk_type": "4 BHK + SR",
          "price": "Call for Price",
          "bhk_Area": "4270 SQ.FT.",
          "_id": "66375717df6f5a16378c9caa"
      }
  ],
  "highlight": [],
  "createdAt": "2024-05-05T09:34:36.735Z",
  "updatedAt": "2024-05-13T12:00:00.096Z",
  "__v": 0

  },{
    "projectName": "Godrej Zenith",
    "projectAddress": "Sector 89, Dwarka Expressway",
    "possession": "2027",
    "city": "Gurgaon",
    "frontImage": {
      "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716627555/Godrej-Zenith/image_z6cytu.jpg"
    },
    "logo": {
      "public_id": "100acre/project/r40ya2h42wugr0wkgux1",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601318/100acre/project/r40ya2h42wugr0wkgux1.png"
  },
  "project_locationImage": {
      "public_id": "100acre/project/cyhxhs7mcjawuhtp7rda",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601288/100acre/project/cyhxhs7mcjawuhtp7rda.jpg"
  },
  "highlightImage": {
      "public_id": "100acre/project/dbla5rbmnnqmqpa9jjsv",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601599/100acre/project/dbla5rbmnnqmqpa9jjsv.jpg"
  },
  "projectMaster_plan": {
      "public_id": "100acre/project/khfgyucvghcjmhbrdhhe",
      "url": "http://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601383/100acre/project/khfgyucvghcjmhbrdhhe.jpg"
  },
  "_id": "663752acdf6f5a16378c95a5",
  "project_floorplan_Image": [
      {
          "public_id": "100acre/project/bswmkcc37btprqrqj6qv",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901671/100acre/project/bswmkcc37btprqrqj6qv.jpg"
      },
      {
          "public_id": "100acre/project/j7zxk8spkuniouxeou5d",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901672/100acre/project/j7zxk8spkuniouxeou5d.jpg"
      },
      {
          "public_id": "100acre/project/wmyqravz8eplntvlagyf",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901673/100acre/project/wmyqravz8eplntvlagyf.jpg"
      }
  ],
  "state": "Haryana",

  "project_discripation": "M3M Altitude, an outstanding residential property situated in the heart of Sector 65, Gurgaon. This premium residential development sets new standards of opulence with its exquisite luxury apartments and an extensive array of world-class facilities and amenities. Designed to cater to the discerning tastes of modern homeowners, this development redefines luxury living with its unparalleled blend of elegance, comfort, and convenience.",
  "projectRedefine_Connectivity": [
      "Situated on 60 metre wide main arterial Sector road"
  ],
  "projectRedefine_Entertainment": [
      "Prominently located on Southern Peripheral Road (Golf Course Extension Road) one of the widest roads in Gurgaon (90 meters wide) and recently announced as NH 236"
  ],
  "projectRedefine_Business": [
      "Strategically linked to all major Business Hubs & Retail destinations"
  ],
  "projectRedefine_Education": [
      "Just 30 minute drive from Delhi International Airport"
  ],
  "meta_description": "M3M Altitude Apartments in Sector 65 were designed to be visually appealing, captivating the senses and enhancing the living experience of its residents",
  "meta_title": "M3M Altitude Sector 65 Gurgaon | Luxury Apartments",
  "Amenities": [
      "Car Parking"
  ],
  "projectBgContent": "M3M Altitude - Luxury Residences in Sector 65 Gurgaon",
  "projectReraNo": "Applied",
  "type": "Residential Flats",
  "builderName": "M3M India",
  "AboutDeveloper": "M3M India means 'Superbness in the Trinity Of Men, Materials and Money'. The aphorism of the organization is \"quality, opportune conveyance and greatness\". Recognizing highlights of M3M inside the business are its inventive, remarkable and unrivaled ideas, multi-dimensional realty arrangements and unparalleled high help norms. Demonstrating its responsibility towards creating cutting edge land works of art, M3M has consistently strived to gather the best ability in the business. The organization has increased important involvement with the land area with different and complimentary gifts from a rich organization of first class go-betweens, monetary establishments, high-total assets people and probably the most rumored designers in India.",
  "projectOverview": "trending",
  "project_Status": "newlunch",
  "schema_type": "project",
  "project_url": "m3m-altitude",
  "projectGallery": [
      {
          "public_id": "100acre/project/jtveoh1dzgwgeai05s8n",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601506/100acre/project/jtveoh1dzgwgeai05s8n.jpg"
      },
      {
          "public_id": "100acre/project/znqldmnn2ghf4vwveth6",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601507/100acre/project/znqldmnn2ghf4vwveth6.jpg"
      },
      {
          "public_id": "100acre/project/rj3utomwptzpznbftqyz",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601508/100acre/project/rj3utomwptzpznbftqyz.jpg"
      }
  ],
  "BhK_Details": [
      {
          "bhk_type": "3 BHK + SR",
          "price": "Call for Price",
          "bhk_Area": "3755 SQ.FT.",
          "_id": "66375706df6f5a16378c9ca6"
      },
      {
          "bhk_type": "4 BHK + SR",
          "price": "Call for Price",
          "bhk_Area": "4270 SQ.FT.",
          "_id": "66375717df6f5a16378c9caa"
      }
  ],
  "highlight": [],
  "createdAt": "2024-05-05T09:34:36.735Z",
  "updatedAt": "2024-05-13T12:00:00.096Z",
  "__v": 0

  },{
    
    "projectName": "Smart World 1 DXP",
    "projectAddress": "Sector 113 , Dwarka Expressway",
    "possession": "2028",
    "city": "Gurgaon",
    "frontImage": {
      "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716629870/Smart-World-1-DXP/2_bhk_apartment-for-sale-sector_113-Gurgaon-others_bvjq1n.webp"
    },
    "logo": {
      "public_id": "100acre/project/r40ya2h42wugr0wkgux1",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601318/100acre/project/r40ya2h42wugr0wkgux1.png"
  },
  "project_locationImage": {
      "public_id": "100acre/project/cyhxhs7mcjawuhtp7rda",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601288/100acre/project/cyhxhs7mcjawuhtp7rda.jpg"
  },
  "highlightImage": {
      "public_id": "100acre/project/dbla5rbmnnqmqpa9jjsv",
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601599/100acre/project/dbla5rbmnnqmqpa9jjsv.jpg"
  },
  "projectMaster_plan": {
      "public_id": "100acre/project/khfgyucvghcjmhbrdhhe",
      "url": "http://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601383/100acre/project/khfgyucvghcjmhbrdhhe.jpg"
  },
  "_id": "663752acdf6f5a16378c95a5",
  "project_floorplan_Image": [
      {
          "public_id": "100acre/project/bswmkcc37btprqrqj6qv",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901671/100acre/project/bswmkcc37btprqrqj6qv.jpg"
      },
      {
          "public_id": "100acre/project/j7zxk8spkuniouxeou5d",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901672/100acre/project/j7zxk8spkuniouxeou5d.jpg"
      },
      {
          "public_id": "100acre/project/wmyqravz8eplntvlagyf",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714901673/100acre/project/wmyqravz8eplntvlagyf.jpg"
      }
  ],
  "state": "Haryana",

  "project_discripation": "M3M Altitude, an outstanding residential property situated in the heart of Sector 65, Gurgaon. This premium residential development sets new standards of opulence with its exquisite luxury apartments and an extensive array of world-class facilities and amenities. Designed to cater to the discerning tastes of modern homeowners, this development redefines luxury living with its unparalleled blend of elegance, comfort, and convenience.",
  "projectRedefine_Connectivity": [
      "Situated on 60 metre wide main arterial Sector road"
  ],
  "projectRedefine_Entertainment": [
      "Prominently located on Southern Peripheral Road (Golf Course Extension Road) one of the widest roads in Gurgaon (90 meters wide) and recently announced as NH 236"
  ],
  "projectRedefine_Business": [
      "Strategically linked to all major Business Hubs & Retail destinations"
  ],
  "projectRedefine_Education": [
      "Just 30 minute drive from Delhi International Airport"
  ],
  "meta_description": "M3M Altitude Apartments in Sector 65 were designed to be visually appealing, captivating the senses and enhancing the living experience of its residents",
  "meta_title": "M3M Altitude Sector 65 Gurgaon | Luxury Apartments",
  "Amenities": [
      "Car Parking"
  ],
  "projectBgContent": "M3M Altitude - Luxury Residences in Sector 65 Gurgaon",
  "projectReraNo": "Applied",
  "type": "Residential Flats",
  "builderName": "M3M India",
  "AboutDeveloper": "M3M India means 'Superbness in the Trinity Of Men, Materials and Money'. The aphorism of the organization is \"quality, opportune conveyance and greatness\". Recognizing highlights of M3M inside the business are its inventive, remarkable and unrivaled ideas, multi-dimensional realty arrangements and unparalleled high help norms. Demonstrating its responsibility towards creating cutting edge land works of art, M3M has consistently strived to gather the best ability in the business. The organization has increased important involvement with the land area with different and complimentary gifts from a rich organization of first class go-betweens, monetary establishments, high-total assets people and probably the most rumored designers in India.",
  "projectOverview": "trending",
  "project_Status": "newlunch",
  "schema_type": "project",
  "project_url": "m3m-altitude",
  "projectGallery": [
      {
          "public_id": "100acre/project/jtveoh1dzgwgeai05s8n",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601506/100acre/project/jtveoh1dzgwgeai05s8n.jpg"
      },
      {
          "public_id": "100acre/project/znqldmnn2ghf4vwveth6",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601507/100acre/project/znqldmnn2ghf4vwveth6.jpg"
      },
      {
          "public_id": "100acre/project/rj3utomwptzpznbftqyz",
          "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601508/100acre/project/rj3utomwptzpznbftqyz.jpg"
      }
  ],
  "BhK_Details": [
      {
          "bhk_type": "3 BHK + SR",
          "price": "Call for Price",
          "bhk_Area": "3755 SQ.FT.",
          "_id": "66375706df6f5a16378c9ca6"
      },
      {
          "bhk_type": "4 BHK + SR",
          "price": "Call for Price",
          "bhk_Area": "4270 SQ.FT.",
          "_id": "66375717df6f5a16378c9caa"
      }
  ],
  "highlight": [],
  "createdAt": "2024-05-05T09:34:36.735Z",
  "updatedAt": "2024-05-13T12:00:00.096Z",
  "__v": 0

  },
    ]

function Residential() {
  return (
    <div className="residential-projects bt">
    <h4><img src={resIcon} alt="Residential" className='section-icon'/>Residential Properties<img src={resIcon} alt="Residential" className='section-icon'/></h4>
    <div className="projects-container">
         {projectData.map((project, index) => (
           <Link key={project.projectName} to={`/projects/${project.projectName}`}>
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

export default Residential
