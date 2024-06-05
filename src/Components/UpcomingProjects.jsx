import React from 'react';
import ProjectsCard from './ProjectsCard';
import '../App.css';
import comingsoon from "../Images/Icons/coming-soon.png"
import { Link } from 'react-router-dom';

const projectData = [
  {
    "projectName": "Signature Global 71",
    "projectAddress": "Sector 71, Southern Peripheral Road",
    "city": "Gurgaon",
    "frontImage": {
      "url": "https://signature-newlaunch71.info/wp-content/uploads/2024/04/banner.jpg"
    },
    "possession":"2029",
  },
  {
    "frontImage": {
        "public_id": "100acre/project/f4si8cfqile0q0oiv4ub",
        "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716557243/Trevoc56/bannerTrevoc56_ks2yc7.jpg"
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
    "projectName": "Trevoc 56",
    "projectAddress": "Sector 56, Golf Course Road",
    "project_discripation": "TREVOC Group has come up with a residential complex in Sector 56, Gurgaon. And we develop this project on Golf Course Road where it ensures a perfect connectivity with major parts of the city. Therefore, it offers 3, 4 and 5 BHK apartments that will redefine the concept of luxury and convenience.    Located in the heart of Sector 56, these apartments offer a lifestyle that is a blend of luxurious surroundings and pinnacle of technology. Furthermore, Residents can enjoy an open and comfortable environment situated in lush green areas. Also, floor plans designed as per condition of fresh air.",
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
    "city": "Gurgaon",
    "possession":"2029",
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
    "possession":"2029",
    "frontImage": {
        "public_id": "100acre/project/wp8mt1qazvejn1vsi5or",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715154693/100acre/project/wp8mt1qazvejn1vsi5or.jpg"
    },
    "logo": {
        "public_id": "100acre/project/f0pay9xr6tfepvq73pls",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1710408084/100acre/project/f0pay9xr6tfepvq73pls.svg"
    },
    "project_locationImage": {
        "public_id": "100acre/project/vwg4lfvw4xjntd9ce8m2",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1710408088/100acre/project/vwg4lfvw4xjntd9ce8m2.jpg"
    },
    "highlightImage": {
        "public_id": "100acre/project/slxw0equmpmktfsswffe",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714540222/100acre/project/slxw0equmpmktfsswffe.jpg"
    },
    "projectMaster_plan": {
        "public_id": "100acre/project/yupsuttstatn6hid97tx",
        "url": "http://res.cloudinary.com/dm5yrsqdc/image/upload/v1714540568/100acre/project/yupsuttstatn6hid97tx.jpg"
    },
    "_id": "65f2c19f7e1280ea133fc457",
    "project_floorplan_Image": [
        {
            "public_id": "100acre/project/ny5kuo6gaqeugmyjnnyc",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1710408089/100acre/project/ny5kuo6gaqeugmyjnnyc.jpg"
        },
        {
            "public_id": "100acre/project/vhh3ijhk9g9wqxi7a4we",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1710408091/100acre/project/vhh3ijhk9g9wqxi7a4we.jpg"
        },
        {
            "public_id": "100acre/project/y7u3njkqibvbaztee5ri",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1710408092/100acre/project/y7u3njkqibvbaztee5ri.jpg"
        }
    ],
    "state": "Haryana",
    "projectName": "Ganga Realty Fusion 85",
    "projectAddress": "Sector 85, Dwarka Expressway",
    "project_discripation": "Ganga Realty Fusion 85 in Sector 85 Gurgaon is a modern architectural brilliance and innovative design. The project features multiple high-rise towers set amidst lush greenery and landscaped gardens, creating a serene and peaceful environment for its residents. The apartments are meticulously crafted to provide ample natural light and ventilation while offering stunning views of the surrounding landscapes.  One of the primary motives for the popularity of Ganga Apartments is its strategic location in Sector 85, Gurgaon. The sector is well-connected to major roads and highways, including the National Highway 48 and the Dwarka Expressway, which provides seamless connectivity to Delhi and other important areas of Gurgaon.",
    "projectRedefine_Connectivity": [
        "Ganga Realty Sector 85 Luxury Apartments have located in Sector 85. And we know that it is a growing area."
    ],
    "projectRedefine_Entertainment": [
        "And Multiplexes located within walk-in distances."
    ],
    "projectRedefine_Business": [
        "You can catch prime locations from Ganga Realty Sector 85 Luxury Apartments Gurgaon."
    ],
    "projectRedefine_Education": [
        "Our luxurious property is away from noisy palaces as well as populated areas."
    ],
    "meta_description": "Ganga Realty Fusion 85 in Sector 85, New Launch in Sector 85 Gurgaon",
    "meta_title": "Ganga Realty Fusion 85 in Sector 85, New Launch in Sector 85 Gurgaon",
    "Amenities": [
        "Car Parking,Golf Course,Swimming Pool,Multipurpose Court,Bike Patrolling Squad,Vaastu Compliant,Cricket,Gym,Kids Pool,4 Tier Security"
    ],
    "projectBgContent": "Ganga Realty Sector 85 Gurgaon - New Launch",
    "projectReraNo": "Applied",
    "type": "Residential Flats",
    "city": "Gurgaon",
    "builderName": "Ganga Realty",
    "AboutDeveloper": "Purity begins at home. It starts with those little joys and simple acts of love that make home our favourite corner of the earth. Explore wholesome living complemented by modern amenities with Ganga Realty. A lifestyle you dreamt of. A lifestyle you deserve. The perfect space for all those memorable moments. Come, love beckons you here at Ganga Realty.",
    "projectOverview": "trending",
    "schema_type": "project",
    "project_url": "ganga-realty-sector-85",
    "projectGallery": [
        {
            "public_id": "100acre/project/sduo7uujzewyq7slqvrs",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714540448/100acre/project/sduo7uujzewyq7slqvrs.jpg"
        },
        {
            "public_id": "100acre/project/zad1omiuzeobnzlms5vy",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714540450/100acre/project/zad1omiuzeobnzlms5vy.jpg"
        },
        {
            "public_id": "100acre/project/kbw4ziixyeqcnfhnaads",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714540451/100acre/project/kbw4ziixyeqcnfhnaads.jpg"
        },
        {
            "public_id": "100acre/project/vypywindklaeflbt20de",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714540452/100acre/project/vypywindklaeflbt20de.jpg"
        }
    ],
    "BhK_Details": [
        {
            "bhk_type": "3 BHK + S + Ut",
            "price": "Call for Price",
            "bhk_Area": "2390 SQ.FT",
            "_id": "65f2c3247e1280ea133fd6c8"
        },
        {
            "bhk_type": "4 BHK + S + Ut",
            "price": "Call for Price",
            "bhk_Area": "3101 SQ.FT",
            "_id": "65f2c3417e1280ea133fd9e4"
        }
    ],
    "highlight": [
        {
            "highlight_Point": "3 ICONIC towers 4-core",
            "_id": "66125e2d23b368c6911fd7ba"
        },
        {
            "highlight_Point": "TALLEST TOWERS in the vicinity with 55-57 Stories",
            "_id": "66125e3d23b368c6911fd7c9"
        },
        {
            "highlight_Point": "8 lifts in single tower with 2 dedicated lifts for each apartment plus 2 service lifts separate",
            "_id": "66125e4623b368c6911fd7d1"
        },
        {
            "highlight_Point": "A massive state-of-the-art Clubhouse.",
            "_id": "66125e5123b368c6911fd7da"
        },
        {
            "highlight_Point": "Sun facing units",
            "_id": "66125e5d23b368c6911fd7e4"
        },
        {
            "highlight_Point": "Principle architect: UHA LONDON",
            "_id": "66125e6923b368c6911fd7ef"
        },
        {
            "highlight_Point": "Masterplan designer:  SCAPE DESIGN",
            "_id": "66125e7023b368c6911fd7fb"
        },
        {
            "highlight_Point": "⁠Landscape architect : MACFURLANE & Associate",
            "_id": "66125e8c23b368c6911fd816"
        },
        {
            "highlight_Point": "Structure audit : SGS",
            "_id": "66125ebb23b368c6911fd8d7"
        }
    ],
    "createdAt": "2024-03-14T09:21:35.707Z",
    "updatedAt": "2024-05-08T07:51:34.383Z",
    "__v": 0,
    "project_Status": "comingsoon"
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
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1710335188/100acre/project/rjbyezexaazo80wih4nt.jpg"
      }
    },
  {
    "possession":"2029",
    "projectName": "Tarc Ishva",
    "projectAddress": "Sector 63A, Southern Peripheral Road",
    "city": "Gurgaon",
    "frontImage": {
        "url": "https://www.tarcishvasector63a.com/tarc-ishva/images/g-1.jpeg"
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
  );
}

export default UpcomingProjects;
