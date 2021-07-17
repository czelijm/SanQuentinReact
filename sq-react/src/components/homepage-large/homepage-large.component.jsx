import { useQuery } from '@apollo/client';
import { Box, Grid, Paper, styled } from '@material-ui/core';
import React from 'react';
import { getContentFormResponse, getHtmlArrayFromData, getItemsFromRespone } from '../../queries/home/home.process-data';
import { GET_HOME_PAGE_LARGE } from '../../queries/home/home.query';
import { HomePageLargeItem } from '../homepage-large-item/homepage-large-item.component';
import SpinnerAbsolute from '../spinner/spinner.component';
import { boxStyles } from './homepage-large.styles';

// import moduleName from './homepage.styles'

const HomePageLarge = () => {
     
    const { loading, error, data } = useQuery(GET_HOME_PAGE_LARGE);

    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};

    const items = getItemsFromRespone(data)
    console.log(items);


    // const itemCount =4;


    return(
        <Box sx={boxStyles(items.length)}>
            
            {items.map((item,index)=><Grid key={index} xs={12}><HomePageLargeItem>1</HomePageLargeItem></Grid>)}
            {/* <Grid xs={12}><Item>1</Item></Grid>
            <Grid sx={{ 'max-width': '100%'}} xs={12}><Item>1</Item></Grid>
            <Grid sx={{ 'max-width': '100%'}} xs={12}><Item>1</Item></Grid> */}
        </Box>
)}

export default HomePageLarge;