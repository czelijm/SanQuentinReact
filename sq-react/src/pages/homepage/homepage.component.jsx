import { Box } from '@material-ui/core';
import React from 'react';
import HomePageLarge from '../../components/homepage-large/homepage-large.component';


import { homePageStyles } from './homepage.styles'

const HomePage = () => {

    return(
    <Box sx={homePageStyles} className = 'homepage'>
        <HomePageLarge/>
    </Box>
)}

export default HomePage;