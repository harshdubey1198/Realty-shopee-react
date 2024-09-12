// import React, { useState } from 'react';
// import PropertyCard from './PropertyCard'; 
// import { Link } from 'react-router-dom';
// import logoImage from "../Images/Realty shopee main logo.png";
// import projectData from "../realtyshopee.json";
// import '../App.css'; 
// import ScrollToTop from './ScrollToTop';
// import { Helmet } from 'react-helmet';
// import {Typography, Container, TextField, Select, MenuItem, InputLabel,  FormControl, Grid, Card, CardContent } from '@mui/material';
// function AllProperties() {
//   const projects = projectData.data || [];
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedType, setSelectedType] = useState('All');

//   const isLocalhost = window.location.hostname === 'localhost' && window.location.port === '3000';

//   const typeMapping = {
//     "Residential": ["residential", "residential plots", "residential property", "residential flats" , "residential apartments"],
//     "Commercial": ["commercial property"],
//     "SCO": ["sco plots","deen dayal plots"],
//     "Floors": ["builder floors","independent floors"],
//     "Affordable" :["affordable homes"]
//   };

//   const sortedProjects = projects.slice().sort((a, b) => {
//     const nameA = a.projectName.toLowerCase();
//     const nameB = b.projectName.toLowerCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
//   });

//   const filteredProjects = sortedProjects.filter(project => {
//     const matchesSearchQuery = project.projectName.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesType = selectedType === 'All' || 
//       (project.type && typeMapping[selectedType]?.some(type => project.type.toLowerCase() === type.toLowerCase()));
//     return matchesSearchQuery && matchesType;
//   });

//   const projectCount = isLocalhost ? filteredProjects.length : 999;

//   return (
//     <div className='al-center'>
//       <Helmet>
//         <title>All Properties are listed here!</title>
//         <link rel="icon" href="https://res.cloudinary.com/dgplzytrq/image/upload/v1720260452/Builders/r_logo_pz8qnp.png"/>
//       </Helmet>

//       <ScrollToTop/>
//       <nav className='all-p-nav'>       
//         <div className='logo-div'>
//           <a href="https://www.realtyshopee.com"><img src={logoImage} alt='Realty Shopee' loading='lazy'/></a>
//         </div>
//         <div className='navigators'>
//           <a href="/">Home</a >
//           <a href="/blogs">Blogs</a>
//           <a href="/contacts">Contact us</a>
//           <a href="/addproperties">Add Properties</a>
//         </div>
//       </nav>
//       <Container>
    
//         <Grid container spacing={2} sx={{ mt: 3 }} className='pt-10 flex flex-row justify-center'>
//           <Grid item xs={12} sm={3}>
//             <TextField
//               fullWidth
//               label="Search projects..."
//               variant="outlined"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={3}>
//             <FormControl fullWidth variant="outlined">
//               <InputLabel>Property Type</InputLabel>
//               <Select
//                 value={selectedType}
//                 onChange={(e) => setSelectedType(e.target.value)}
//                 label="Property Type"
//               >
//                 <MenuItem value="All">All Types</MenuItem>
//                 <MenuItem value="Residential">Residential</MenuItem>
//                 <MenuItem value="Commercial">Commercial</MenuItem>
//                 <MenuItem value="SCO">SCO</MenuItem>
//                 <MenuItem value="Floors">Floors</MenuItem>
//                 <MenuItem value="Affordable">Affordable</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>

//         <Grid container spacing={3} sx={{ mt: 3 }}>
//           {filteredProjects.length > 0 ? (
//             filteredProjects.map((project, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 {/* <Card> */}
//                   <Link to={`/property/${project.projectName}`}>
//                     <CardContent>
//                       <PropertyCard property={project} />
//                     </CardContent>
//                   </Link>
//                 {/* </Card> */}
//               </Grid>
//             ))
//           ) : (
//             <Typography variant="h6" align="center" sx={{ mt: 3 }}>
//               No projects available
//             </Typography>
//           )}
//         </Grid>

//         {isLocalhost && (
//           <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//             Total Projects: {projectCount}
//           </Typography>
//         )}
//       </Container>
//     </div>
//   );
// }

// export default AllProperties;
import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard'; 
import { Link } from 'react-router-dom';
import logoImage from "../Images/Realty shopee main logo.png";
import projectData from "../realtyshopee.json";
import '../App.css'; 
import ScrollToTop from './ScrollToTop';
import { Helmet } from 'react-helmet';
import {Typography, Container, TextField, Select, MenuItem, InputLabel, FormControl, Grid, CardContent } from '@mui/material';

function AllProperties() {
  const projects = projectData.data || [];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(12); // Start by showing 12 projects

  const isLocalhost = window.location.hostname === 'localhost' && window.location.port === '3000';

  const typeMapping = {
    "Residential": ["residential", "residential plots", "residential property", "residential flats" , "residential apartments"],
    "Commercial": ["commercial property"],
    "SCO": ["sco plots","deen dayal plots"],
    "Floors": ["builder floors","independent floors"],
    "Affordable" :["affordable homes"]
  };

  const sortedProjects = projects.slice().sort((a, b) => {
    const nameA = a.projectName.toLowerCase();
    const nameB = b.projectName.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  const filteredProjects = sortedProjects.filter(project => {
    const matchesSearchQuery = project.projectName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || 
      (project.type && typeMapping[selectedType]?.some(type => project.type.toLowerCase() === type.toLowerCase()));
    return matchesSearchQuery && matchesType;
  });

  const projectCount = isLocalhost ? filteredProjects.length : 999;

  // Event handler for scroll event to detect bottom of the page
  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      loadMoreProjects();
    }
  };

  // Load more projects when scrolled to the bottom
  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => Math.min(prevVisible + 12, filteredProjects.length));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredProjects.length]);

  return (
    <div className='al-center'>
      <Helmet>
        <title>All Properties are listed here!</title>
        <link rel="icon" href="https://res.cloudinary.com/dgplzytrq/image/upload/v1720260452/Builders/r_logo_pz8qnp.png"/>
      </Helmet>

      <ScrollToTop/>
      <nav className='all-p-nav'>       
        <div className='logo-div'>
          <a href="https://www.realtyshopee.com"><img src={logoImage} alt='Realty Shopee' loading='lazy'/></a>
        </div>
        <div className='navigators'>
          <a href="/">Home</a >
          <a href="/blogs">Blogs</a>
          <a href="/contacts">Contact us</a>
          <a href="/addproperties">Add Properties</a>
        </div>
      </nav>

      <Container>
        <Grid container spacing={2} sx={{ mt: 3 }} className='pt-10 flex flex-row justify-center'>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Search projects..."
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Property Type</InputLabel>
              <Select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                label="Property Type"
              >
                <MenuItem value="All">All Types</MenuItem>
                <MenuItem value="Residential">Residential</MenuItem>
                <MenuItem value="Commercial">Commercial</MenuItem>
                <MenuItem value="SCO">SCO</MenuItem>
                <MenuItem value="Floors">Floors</MenuItem>
                <MenuItem value="Affordable">Affordable</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={`/property/${project.projectName}`}>
                <CardContent>
                  <PropertyCard property={project} />
                </CardContent>
              </Link>
            </Grid>
          ))}

          {filteredProjects.length === 0 && (
            <Typography variant="h6" align="center" sx={{ mt: 3 }}>
              No projects available for the selected criteria
            </Typography>
          )}
        </Grid>

        {isLocalhost && (
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Total Projects: {projectCount}
          </Typography>
        )}
      </Container>
    </div>
  );
}

export default AllProperties;
