import { Box, Grid, Paper, styled } from '@material-ui/core';
import React from 'react';
import { HomePageLargeItem } from '../homepage-large-item/homepage-large-item.component';
import { boxStyles } from './homepage-large.styles';

// import moduleName from './homepage.styles'

const HomePageLarge = () => {
     
    const itemCount =4;

    
    return(
        <Box sx={boxStyles(itemCount)}>
            <Grid xs={12}><HomePageLargeItem>1</HomePageLargeItem></Grid>
            <Grid xs={12}><HomePageLargeItem>1</HomePageLargeItem></Grid>
            {/* <Grid xs={12}><Item>1</Item></Grid>
            <Grid sx={{ 'max-width': '100%'}} xs={12}><Item>1</Item></Grid>
            <Grid sx={{ 'max-width': '100%'}} xs={12}><Item>1</Item></Grid> */}
        </Box>
)}

export default HomePageLarge;