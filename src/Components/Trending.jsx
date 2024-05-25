import React from 'react';
import ProjectsCard from './ProjectsCard';
import '../App.css';
import trending from "../Images/Icons/trending.png"
const projectData = [
  {
    "projectName": "Signature Global 71",
    "projectAddress": "Sector 71, Southern Peripheral Road",
    "city": "Gurgaon",
    "frontImage": {
      "url": "https://signature-newlaunch71.info/wp-content/uploads/2024/04/banner.jpg"
    },"possession":"2029",
  },
  {
    "possession":"2029",
    "frontImage": {
        "public_id": "100acre/project/f4si8cfqile0q0oiv4ub",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1715601354/100acre/project/f4si8cfqile0q0oiv4ub.jpg"
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
    "projectName": "M3M Altitude",
    "projectAddress": "Sector 65, Golf Course Extn Road",
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
    "city": "Gurgaon",
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
    "projectName": "Krisumi Waterside Residencies",
    "projectAddress": "Sector 36A, Dwarka Expressway",
    "city": "Gurgaon",
    "possession":"2029",
    "frontImage": {
      "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1710335188/100acre/project/rjbyezexaazo80wih4nt.jpg"
    }
  },
  {
    "frontImage": {
        "public_id": "100acre/project/r9ogecjzjckzyzkonezl",
        "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716555467/Omaxe19B/fsshjjpg4asp21r0b3bn.jpg_piwyjg.jpg"
    },
    "logo": {
        "public_id": "100acre/project/fu2ugzvbiniqe9sbm66c",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1712833222/100acre/project/fu2ugzvbiniqe9sbm66c.png"
    },
    "project_locationImage": {
        "public_id": "100acre/project/tjoqjtmsbivylso2x6qr",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995608/100acre/project/tjoqjtmsbivylso2x6qr.jpg"
    },
    "highlightImage": {
        "public_id": "100acre/project/dzutjo3rnhwkxckrsgws",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995808/100acre/project/dzutjo3rnhwkxckrsgws.jpg"
    },
    "projectMaster_plan": {
        "public_id": "100acre/project/sejlormwdamgrki8pw6w",
        "url": "http://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995676/100acre/project/sejlormwdamgrki8pw6w.jpg"
    },
    "_id": "6617c2cf0dbd2ab11644eb96",
    "project_floorplan_Image": [
        {
            "public_id": "100acre/project/ewcxkste4vt1padwkb27",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995740/100acre/project/ewcxkste4vt1padwkb27.jpg"
        },
        {
            "public_id": "100acre/project/tahkwq4dpop6skqzyahy",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995741/100acre/project/tahkwq4dpop6skqzyahy.jpg"
        },
        {
            "public_id": "100acre/project/rkteafhac1w6xruexw4p",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995742/100acre/project/rkteafhac1w6xruexw4p.jpg"
        },
        {
            "public_id": "100acre/project/fcvnndikplcb99dumqml",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995744/100acre/project/fcvnndikplcb99dumqml.jpg"
        },
        {
            "public_id": "100acre/project/vonnpg211nsg9atnsxc8",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995745/100acre/project/vonnpg211nsg9atnsxc8.jpg"
        }
    ],
    "state": "New Delhi",
    "projectName": "Omaxe State",
    "projectAddress": "Sector 19B, Dwarka",
    "project_discripation": "Expanding Commercial Prospects in the Center of Delhi! Omaxe Dwarka Shopping Center Delhi Business Project offers top-notch dining establishments, retail outlets, office spaces, and multi-level parking. It aims to offer state-of-the-art amenities and chances for business expansion in Delhi’s business district.\r\nOmaxe Group, a pioneering real estate developer, has secured the signature commercial project of Omaxe Dwarka Delhi. With a budget of INR 2100 crore, the project entails the development of a sports complex and retail center in the strategic location of Dwarka, the national capital.",
    "projectRedefine_Connectivity": [
        "15 minutes drive from Indira Gandhi International (IGI) Airport."
    ],
    "projectRedefine_Entertainment": [
        "5 minutes form Nearest Metro Station"
    ],
    "projectRedefine_Business": [
        "6 km away from the Gurgaon border"
    ],
    "projectRedefine_Education": [
        "Located within 5 km from Vegas Mall And hospitals like Ayushman Hospital, and Aakash Healthcare Super Speciality Hospital."
    ],
    "meta_description": "Omaxe State Dwarka Delhi is an impending luxury commercial project that features premium quality retail shops, offices & sports arena with top-class niceties.",
    "meta_title": "Omaxe State Dwarka Delhi - Commercial Property in Sector 19B New Delhi",
    "Amenities": [
        "24x7 Power Backup",
        "Dedicated Lifts And Escalators",
        " Swimming Pool With Jacuzzi",
        "Advanced Security",
        "3 Level Carr Parking",
        "Jogging Track",
        "Beautifully Designed Glass Facade",
        "Surrounded By Developed Sectors"
    ],
    "projectBgContent": "OMAXE DWARKA",
    "projectReraNo": "Applied",
    "type": "Commercial Property",
    "city": "Delhi",
    "builderName": "Omaxe",
    "AboutDeveloper": "Since 1987, Omaxe has been relentless in its approach to providing world-class services in real estate and has a varied portfolio comprising Integrated and High-Tech Townships, Group Housing, SCOs, Shopping malls, and Hotels to name a select few.",
    "projectOverview": "commercial",
    "project_Status": "newlunch",
    "schema_type": "project",
    "project_url": "omaxe-dwarka",
    "projectGallery": [
        {
            "public_id": "100acre/project/fsshjjpg4asp21r0b3bn",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995896/100acre/project/fsshjjpg4asp21r0b3bn.jpg"
        },
        {
            "public_id": "100acre/project/ivytzbdn2rrnkkacypdz",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995897/100acre/project/ivytzbdn2rrnkkacypdz.jpg"
        },
        {
            "public_id": "100acre/project/sht9adqpmgsdqneepykn",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995898/100acre/project/sht9adqpmgsdqneepykn.jpg"
        },
        {
            "public_id": "100acre/project/kedunsdqmpj2hvefq3eo",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995899/100acre/project/kedunsdqmpj2hvefq3eo.jpg"
        }
    ],
    "BhK_Details": [
        {
            "bhk_type": "Office Space",
            "price": "Call for Price",
            "bhk_Area": "On Request",
            "_id": "6638c5b2df6f5a16378ef08e"
        },
        {
            "bhk_type": "Retail Shops",
            "price": "Call for Price",
            "bhk_Area": "On Request",
            "_id": "6638c5c2df6f5a16378ef09c"
        }
    ],
    "highlight": [
        {
            "highlight_Point": "Land Parcel - 50.4 acres",
            "_id": "6617c4f60dbd2ab11644f194"
        },
        {
            "highlight_Point": "Opposite Bharat Vandana 220 Acres",
            "_id": "6617c4fc0dbd2ab11644f198"
        },
        {
            "highlight_Point": "70,000 Ft FAC Area",
            "_id": "6617c5040dbd2ab11644f19d"
        },
        {
            "highlight_Point": "100+ Room Hotel Above Banquet",
            "_id": "6617c50d0dbd2ab11644f1a3"
        },
        {
            "highlight_Point": "80 Seater Auditorium",
            "_id": "6617c5140dbd2ab11644f1aa"
        },
        {
            "highlight_Point": "40,000 Seater With Hydraulic Pitch",
            "_id": "6617c51b0dbd2ab11644f1b2"
        },
        {
            "highlight_Point": "6/7 Screen Multiplex",
            "_id": "6617c5220dbd2ab11644f1bb"
        },
        {
            "highlight_Point": "80% Retail - Ground",
            "_id": "6617c5290dbd2ab11644f1c5"
        },
        {
            "highlight_Point": "Opposite Bharat Vandana 220 Acres",
            "_id": "6617c5410dbd2ab11644f1ea"
        },
        {
            "highlight_Point": "42 Restaurants In The Whole Project",
            "_id": "6617c5490dbd2ab11644f1f6"
        }
    ],
    "createdAt": "2024-04-11T11:00:31.052Z",
    "updatedAt": "2024-05-06T11:57:54.805Z",
    "__v": 0,
    "possession":"2029"
},
{
    "frontImage": {
        "public_id": "100acre/project/r9ogecjzjckzyzkonezl",
        "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716619813/Ganga-Realty-Nandaka/bannerImage_wijhay.jpg"
    },
    "logo": {
        "public_id": "100acre/project/fu2ugzvbiniqe9sbm66c",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1712833222/100acre/project/fu2ugzvbiniqe9sbm66c.png"
    },
    "project_locationImage": {
        "public_id": "100acre/project/tjoqjtmsbivylso2x6qr",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995608/100acre/project/tjoqjtmsbivylso2x6qr.jpg"
    },
    "highlightImage": {
        "public_id": "100acre/project/dzutjo3rnhwkxckrsgws",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995808/100acre/project/dzutjo3rnhwkxckrsgws.jpg"
    },
    "projectMaster_plan": {
        "public_id": "100acre/project/sejlormwdamgrki8pw6w",
        "url": "http://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995676/100acre/project/sejlormwdamgrki8pw6w.jpg"
    },
    "_id": "6617c2cf0dbd2ab11644eb96",
    "project_floorplan_Image": [
        {
            "public_id": "100acre/project/ewcxkste4vt1padwkb27",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995740/100acre/project/ewcxkste4vt1padwkb27.jpg"
        },
        {
            "public_id": "100acre/project/tahkwq4dpop6skqzyahy",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995741/100acre/project/tahkwq4dpop6skqzyahy.jpg"
        },
        {
            "public_id": "100acre/project/rkteafhac1w6xruexw4p",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995742/100acre/project/rkteafhac1w6xruexw4p.jpg"
        },
        {
            "public_id": "100acre/project/fcvnndikplcb99dumqml",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995744/100acre/project/fcvnndikplcb99dumqml.jpg"
        },
        {
            "public_id": "100acre/project/vonnpg211nsg9atnsxc8",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995745/100acre/project/vonnpg211nsg9atnsxc8.jpg"
        }
    ],
    "state": "Haryana",
    "projectName": "Ganga Realty Nandaka",
    "projectAddress": "Sector 84, Dwarka Expressway",
    "project_discripation": "Expanding Commercial Prospects in the Center of Delhi! Omaxe Dwarka Shopping Center Delhi Business Project offers top-notch dining establishments, retail outlets, office spaces, and multi-level parking. It aims to offer state-of-the-art amenities and chances for business expansion in Delhi’s business district.\r\nOmaxe Group, a pioneering real estate developer, has secured the signature commercial project of Omaxe Dwarka Delhi. With a budget of INR 2100 crore, the project entails the development of a sports complex and retail center in the strategic location of Dwarka, the national capital.",
    "projectRedefine_Connectivity": [
        "15 minutes drive from Indira Gandhi International (IGI) Airport."
    ],
    "projectRedefine_Entertainment": [
        "5 minutes form Nearest Metro Station"
    ],
    "projectRedefine_Business": [
        "6 km away from the Gurgaon border"
    ],
    "projectRedefine_Education": [
        "Located within 5 km from Vegas Mall And hospitals like Ayushman Hospital, and Aakash Healthcare Super Speciality Hospital."
    ],
    "meta_description": "Omaxe State Dwarka Delhi is an impending luxury commercial project that features premium quality retail shops, offices & sports arena with top-class niceties.",
    "meta_title": "Omaxe State Dwarka Delhi - Commercial Property in Sector 19B New Delhi",
    "Amenities": [
        "24x7 Power Backup",
        "Dedicated Lifts And Escalators",
        " Swimming Pool With Jacuzzi",
        "Advanced Security",
        "3 Level Carr Parking",
        "Jogging Track",
        "Beautifully Designed Glass Facade",
        "Surrounded By Developed Sectors"
    ],
    "projectBgContent": "Ganga Nandaka",
    "projectReraNo": "Applied",
    "type": "Commercial Property",
    "city": "Gurgaon",
    "builderName": "GANGA REALTY",
    "AboutDeveloper": "Since 1987, Omaxe has been relentless in its approach to providing world-class services in real estate and has a varied portfolio comprising Integrated and High-Tech Townships, Group Housing, SCOs, Shopping malls, and Hotels to name a select few.",
    "projectOverview": "commercial",
    "project_Status": "newlunch",
    "schema_type": "project",
    "project_url": "nandaka-dwarka",
    "projectGallery": [
        {
            "public_id": "100acre/project/fsshjjpg4asp21r0b3bn",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995896/100acre/project/fsshjjpg4asp21r0b3bn.jpg"
        },
        {
            "public_id": "100acre/project/ivytzbdn2rrnkkacypdz",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995897/100acre/project/ivytzbdn2rrnkkacypdz.jpg"
        },
        {
            "public_id": "100acre/project/sht9adqpmgsdqneepykn",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995898/100acre/project/sht9adqpmgsdqneepykn.jpg"
        },
        {
            "public_id": "100acre/project/kedunsdqmpj2hvefq3eo",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995899/100acre/project/kedunsdqmpj2hvefq3eo.jpg"
        }
    ],
    "BhK_Details": [
        {
            "bhk_type": "Office Space",
            "price": "Call for Price",
            "bhk_Area": "On Request",
            "_id": "6638c5b2df6f5a16378ef08e"
        },
        {
            "bhk_type": "Retail Shops",
            "price": "Call for Price",
            "bhk_Area": "On Request",
            "_id": "6638c5c2df6f5a16378ef09c"
        }
    ],
    "highlight": [
        {
            "highlight_Point": "Land Parcel - 50.4 acres",
            "_id": "6617c4f60dbd2ab11644f194"
        },
        {
            "highlight_Point": "Opposite Bharat Vandana 220 Acres",
            "_id": "6617c4fc0dbd2ab11644f198"
        },
        {
            "highlight_Point": "70,000 Ft FAC Area",
            "_id": "6617c5040dbd2ab11644f19d"
        },
        {
            "highlight_Point": "100+ Room Hotel Above Banquet",
            "_id": "6617c50d0dbd2ab11644f1a3"
        },
        {
            "highlight_Point": "80 Seater Auditorium",
            "_id": "6617c5140dbd2ab11644f1aa"
        },
        {
            "highlight_Point": "40,000 Seater With Hydraulic Pitch",
            "_id": "6617c51b0dbd2ab11644f1b2"
        },
        {
            "highlight_Point": "6/7 Screen Multiplex",
            "_id": "6617c5220dbd2ab11644f1bb"
        },
        {
            "highlight_Point": "80% Retail - Ground",
            "_id": "6617c5290dbd2ab11644f1c5"
        },
        {
            "highlight_Point": "Opposite Bharat Vandana 220 Acres",
            "_id": "6617c5410dbd2ab11644f1ea"
        },
        {
            "highlight_Point": "42 Restaurants In The Whole Project",
            "_id": "6617c5490dbd2ab11644f1f6"
        }
    ],
    "createdAt": "2024-04-11T11:00:31.052Z",
    "updatedAt": "2024-05-06T11:57:54.805Z",
    "__v": 0,
    "possession":"2030"
},
{
    "frontImage": {
        "public_id": "100acre/project/r9ogecjzjckzyzkonezl",
        "url": "https://www.aiplprojects.in/aipl-assets/images/aipl-joy-gallery/gallery-3.webp"
    },
    "logo": {
        "public_id": "100acre/project/fu2ugzvbiniqe9sbm66c",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1712833222/100acre/project/fu2ugzvbiniqe9sbm66c.png"
    },
    "project_locationImage": {
        "public_id": "100acre/project/tjoqjtmsbivylso2x6qr",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995608/100acre/project/tjoqjtmsbivylso2x6qr.jpg"
    },
    "highlightImage": {
        "public_id": "100acre/project/dzutjo3rnhwkxckrsgws",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995808/100acre/project/dzutjo3rnhwkxckrsgws.jpg"
    },
    "projectMaster_plan": {
        "public_id": "100acre/project/sejlormwdamgrki8pw6w",
        "url": "http://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995676/100acre/project/sejlormwdamgrki8pw6w.jpg"
    },
    "_id": "6617c2cf0dbd2ab11644eb96",
    "project_floorplan_Image": [
        {
            "public_id": "100acre/project/ewcxkste4vt1padwkb27",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995740/100acre/project/ewcxkste4vt1padwkb27.jpg"
        },
        {
            "public_id": "100acre/project/tahkwq4dpop6skqzyahy",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995741/100acre/project/tahkwq4dpop6skqzyahy.jpg"
        },
        {
            "public_id": "100acre/project/rkteafhac1w6xruexw4p",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995742/100acre/project/rkteafhac1w6xruexw4p.jpg"
        },
        {
            "public_id": "100acre/project/fcvnndikplcb99dumqml",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995744/100acre/project/fcvnndikplcb99dumqml.jpg"
        },
        {
            "public_id": "100acre/project/vonnpg211nsg9atnsxc8",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995745/100acre/project/vonnpg211nsg9atnsxc8.jpg"
        }
    ],
    "state": "Haryana",
    "projectName": "AIPL Joy Gallery",
    "projectAddress": "Sector 66, Golf Course Extension Road",
    "project_discripation": "Expanding Commercial Prospects in the Center of Delhi! Omaxe Dwarka Shopping Center Delhi Business Project offers top-notch dining establishments, retail outlets, office spaces, and multi-level parking. It aims to offer state-of-the-art amenities and chances for business expansion in Delhi’s business district.\r\nOmaxe Group, a pioneering real estate developer, has secured the signature commercial project of Omaxe Dwarka Delhi. With a budget of INR 2100 crore, the project entails the development of a sports complex and retail center in the strategic location of Dwarka, the national capital.",
    "projectRedefine_Connectivity": [
        "15 minutes drive from Indira Gandhi International (IGI) Airport."
    ],
    "projectRedefine_Entertainment": [
        "5 minutes form Nearest Metro Station"
    ],
    "projectRedefine_Business": [
        "6 km away from the Gurgaon border"
    ],
    "projectRedefine_Education": [
        "Located within 5 km from Vegas Mall And hospitals like Ayushman Hospital, and Aakash Healthcare Super Speciality Hospital."
    ],
    "meta_description": "Omaxe State Dwarka Delhi is an impending luxury commercial project that features premium quality retail shops, offices & sports arena with top-class niceties.",
    "meta_title": "Omaxe State Dwarka Delhi - Commercial Property in Sector 19B New Delhi",
    "Amenities": [
        "24x7 Power Backup",
        "Dedicated Lifts And Escalators",
        " Swimming Pool With Jacuzzi",
        "Advanced Security",
        "3 Level Carr Parking",
        "Jogging Track",
        "Beautifully Designed Glass Facade",
        "Surrounded By Developed Sectors"
    ],
    "projectBgContent": "OMAXE DWARKA",
    "projectReraNo": "Applied",
    "type": "Commercial Property",
    "city": "Gurgaon",
    "builderName": "Omaxe",
    "AboutDeveloper": "Since 1987, Omaxe has been relentless in its approach to providing world-class services in real estate and has a varied portfolio comprising Integrated and High-Tech Townships, Group Housing, SCOs, Shopping malls, and Hotels to name a select few.",
    "projectOverview": "commercial",
    "project_Status": "newlunch",
    "schema_type": "project",
    "project_url": "omaxe-dwarka",
    "projectGallery": [
        {
            "public_id": "100acre/project/fsshjjpg4asp21r0b3bn",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995896/100acre/project/fsshjjpg4asp21r0b3bn.jpg"
        },
        {
            "public_id": "100acre/project/ivytzbdn2rrnkkacypdz",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995897/100acre/project/ivytzbdn2rrnkkacypdz.jpg"
        },
        {
            "public_id": "100acre/project/sht9adqpmgsdqneepykn",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995898/100acre/project/sht9adqpmgsdqneepykn.jpg"
        },
        {
            "public_id": "100acre/project/kedunsdqmpj2hvefq3eo",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995899/100acre/project/kedunsdqmpj2hvefq3eo.jpg"
        }
    ],
    "BhK_Details": [
        {
            "bhk_type": "Office Space",
            "price": "Call for Price",
            "bhk_Area": "On Request",
            "_id": "6638c5b2df6f5a16378ef08e"
        },
        {
            "bhk_type": "Retail Shops",
            "price": "Call for Price",
            "bhk_Area": "On Request",
            "_id": "6638c5c2df6f5a16378ef09c"
        }
    ],
    "highlight": [
        {
            "highlight_Point": "Land Parcel - 50.4 acres",
            "_id": "6617c4f60dbd2ab11644f194"
        },
        {
            "highlight_Point": "Opposite Bharat Vandana 220 Acres",
            "_id": "6617c4fc0dbd2ab11644f198"
        },
        {
            "highlight_Point": "70,000 Ft FAC Area",
            "_id": "6617c5040dbd2ab11644f19d"
        },
        {
            "highlight_Point": "100+ Room Hotel Above Banquet",
            "_id": "6617c50d0dbd2ab11644f1a3"
        },
        {
            "highlight_Point": "80 Seater Auditorium",
            "_id": "6617c5140dbd2ab11644f1aa"
        },
        {
            "highlight_Point": "40,000 Seater With Hydraulic Pitch",
            "_id": "6617c51b0dbd2ab11644f1b2"
        },
        {
            "highlight_Point": "6/7 Screen Multiplex",
            "_id": "6617c5220dbd2ab11644f1bb"
        },
        {
            "highlight_Point": "80% Retail - Ground",
            "_id": "6617c5290dbd2ab11644f1c5"
        },
        {
            "highlight_Point": "Opposite Bharat Vandana 220 Acres",
            "_id": "6617c5410dbd2ab11644f1ea"
        },
        {
            "highlight_Point": "42 Restaurants In The Whole Project",
            "_id": "6617c5490dbd2ab11644f1f6"
        }
    ],
    "createdAt": "2024-04-11T11:00:31.052Z",
    "updatedAt": "2024-05-06T11:57:54.805Z",
    "__v": 0,
    "possession":"2024"
},
{
    "frontImage": {
        "public_id": "100acre/project/r9ogecjzjckzyzkonezl",
        "url": "https://res.cloudinary.com/dgplzytrq/image/upload/v1716625012/SS-Whitewater/Project-Photo-4-SS-Whitewater-Gurgaon-5419149_778_1200_310_462_tvsqk3.jpg"
    },
    "logo": {
        "public_id": "100acre/project/fu2ugzvbiniqe9sbm66c",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1712833222/100acre/project/fu2ugzvbiniqe9sbm66c.png"
    },
    "project_locationImage": {
        "public_id": "100acre/project/tjoqjtmsbivylso2x6qr",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995608/100acre/project/tjoqjtmsbivylso2x6qr.jpg"
    },
    "highlightImage": {
        "public_id": "100acre/project/dzutjo3rnhwkxckrsgws",
        "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995808/100acre/project/dzutjo3rnhwkxckrsgws.jpg"
    },
    "projectMaster_plan": {
        "public_id": "100acre/project/sejlormwdamgrki8pw6w",
        "url": "http://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995676/100acre/project/sejlormwdamgrki8pw6w.jpg"
    },
    "_id": "6617c2cf0dbd2ab11644eb96",
    "project_floorplan_Image": [
        {
            "public_id": "100acre/project/ewcxkste4vt1padwkb27",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995740/100acre/project/ewcxkste4vt1padwkb27.jpg"
        },
        {
            "public_id": "100acre/project/tahkwq4dpop6skqzyahy",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995741/100acre/project/tahkwq4dpop6skqzyahy.jpg"
        },
        {
            "public_id": "100acre/project/rkteafhac1w6xruexw4p",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995742/100acre/project/rkteafhac1w6xruexw4p.jpg"
        },
        {
            "public_id": "100acre/project/fcvnndikplcb99dumqml",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995744/100acre/project/fcvnndikplcb99dumqml.jpg"
        },
        {
            "public_id": "100acre/project/vonnpg211nsg9atnsxc8",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995745/100acre/project/vonnpg211nsg9atnsxc8.jpg"
        }
    ],
    "state": "Haryana",
    "projectName": "SS WHITEWATER",
    "projectAddress": "Sector 90",
    "project_discripation": "Expanding Commercial Prospects in the Center of Delhi! Omaxe Dwarka Shopping Center Delhi Business Project offers top-notch dining establishments, retail outlets, office spaces, and multi-level parking. It aims to offer state-of-the-art amenities and chances for business expansion in Delhi’s business district.\r\nOmaxe Group, a pioneering real estate developer, has secured the signature commercial project of Omaxe Dwarka Delhi. With a budget of INR 2100 crore, the project entails the development of a sports complex and retail center in the strategic location of Dwarka, the national capital.",
    "projectRedefine_Connectivity": [
        "15 minutes drive from Indira Gandhi International (IGI) Airport."
    ],
    "projectRedefine_Entertainment": [
        "5 minutes form Nearest Metro Station"
    ],
    "projectRedefine_Business": [
        "6 km away from the Gurgaon border"
    ],
    "projectRedefine_Education": [
        "Located within 5 km from Vegas Mall And hospitals like Ayushman Hospital, and Aakash Healthcare Super Speciality Hospital."
    ],
    "meta_description": "Omaxe State Dwarka Delhi is an impending luxury commercial project that features premium quality retail shops, offices & sports arena with top-class niceties.",
    "meta_title": "Omaxe State Dwarka Delhi - Commercial Property in Sector 19B New Delhi",
    "Amenities": [
        "24x7 Power Backup",
        "Dedicated Lifts And Escalators",
        " Swimming Pool With Jacuzzi",
        "Advanced Security",
        "3 Level Carr Parking",
        "Jogging Track",
        "Beautifully Designed Glass Facade",
        "Surrounded By Developed Sectors"
    ],
    "projectBgContent": "SS Whitewater",
    "projectReraNo": "Applied",
    "type": "Commercial Property",
    "city": "Gurgaon",
    "builderName": "SS",
    "AboutDeveloper": "Since 1987, Omaxe has been relentless in its approach to providing world-class services in real estate and has a varied portfolio comprising Integrated and High-Tech Townships, Group Housing, SCOs, Shopping malls, and Hotels to name a select few.",
    "projectOverview": "commercial",
    "project_Status": "newlunch",
    "schema_type": "project",
    "project_url": "ss-whitewater",
    "projectGallery": [
        {
            "public_id": "100acre/project/fsshjjpg4asp21r0b3bn",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995896/100acre/project/fsshjjpg4asp21r0b3bn.jpg"
        },
        {
            "public_id": "100acre/project/ivytzbdn2rrnkkacypdz",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995897/100acre/project/ivytzbdn2rrnkkacypdz.jpg"
        },
        {
            "public_id": "100acre/project/sht9adqpmgsdqneepykn",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995898/100acre/project/sht9adqpmgsdqneepykn.jpg"
        },
        {
            "public_id": "100acre/project/kedunsdqmpj2hvefq3eo",
            "url": "https://res.cloudinary.com/dm5yrsqdc/image/upload/v1714995899/100acre/project/kedunsdqmpj2hvefq3eo.jpg"
        }
    ],
    "BhK_Details": [
        {
            "bhk_type": "Office Space",
            "price": "Call for Price",
            "bhk_Area": "On Request",
            "_id": "6638c5b2df6f5a16378ef08e"
        },
        {
            "bhk_type": "Retail Shops",
            "price": "Call for Price",
            "bhk_Area": "On Request",
            "_id": "6638c5c2df6f5a16378ef09c"
        }
    ],
    "highlight": [
        {
            "highlight_Point": "Land Parcel - 50.4 acres",
            "_id": "6617c4f60dbd2ab11644f194"
        },
        {
            "highlight_Point": "Opposite Bharat Vandana 220 Acres",
            "_id": "6617c4fc0dbd2ab11644f198"
        },
        {
            "highlight_Point": "70,000 Ft FAC Area",
            "_id": "6617c5040dbd2ab11644f19d"
        },
        {
            "highlight_Point": "100+ Room Hotel Above Banquet",
            "_id": "6617c50d0dbd2ab11644f1a3"
        },
        {
            "highlight_Point": "80 Seater Auditorium",
            "_id": "6617c5140dbd2ab11644f1aa"
        },
        {
            "highlight_Point": "40,000 Seater With Hydraulic Pitch",
            "_id": "6617c51b0dbd2ab11644f1b2"
        },
        {
            "highlight_Point": "6/7 Screen Multiplex",
            "_id": "6617c5220dbd2ab11644f1bb"
        },
        {
            "highlight_Point": "80% Retail - Ground",
            "_id": "6617c5290dbd2ab11644f1c5"
        },
        {
            "highlight_Point": "Opposite Bharat Vandana 220 Acres",
            "_id": "6617c5410dbd2ab11644f1ea"
        },
        {
            "highlight_Point": "42 Restaurants In The Whole Project",
            "_id": "6617c5490dbd2ab11644f1f6"
        }
    ],
    "createdAt": "2024-04-11T11:00:31.052Z",
    "updatedAt": "2024-05-06T11:57:54.805Z",
    "__v": 0,
    "possession":"2028"
},
];

function Trending() {
  return (
    <div className="trending-section bt">
      <h4><img src={trending} alt="trending" className='section-icon'/>Trending Projects <img src={trending} alt="trending" className='section-icon'/></h4>
      <hr />
      <div className="projects-container">
        {projectData.map((project, index) => (  
          <ProjectsCard
            key={index}
            projectName={project.projectName}
            projectAddress={project.projectAddress}
            city={project.city}
            possession={project.possession}
            frontImage={project.frontImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Trending;
