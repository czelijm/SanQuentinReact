import { useQuery } from '@apollo/client';
import { Box, Grid, Paper, styled } from '@material-ui/core';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize/useWindowSize';
import { HomePageGlobalStyle } from '../../pages/homepage/homepage.styles';
import { getContentFormResponse, getHtmlArrayFromData, getItemsFromRespone } from '../../queries/home/home.process-data';
import { GET_HOME_PAGE_LARGE } from '../../queries/home/home.query';
import  HomePageLargeItem from '../homepage-large-item/homepage-large-item.component';
import SpinnerAbsolute from '../spinner/spinner.component';
import VideoPlayer from '../video-player/video-player.component';
import { boxStyles, boxStylesFlex, gridMobileStyles, logoBox, LogoTitle } from './homepage-large.styles';


// import moduleName from './homepage.styles'

const HomePageLarge = () => {
     
    const { loading, error, data } = useQuery(GET_HOME_PAGE_LARGE);
    const [,,isMobile] = useWindowSize();
    if (loading) return <SpinnerAbsolute/>;
    if (error) return <Redirect to={'/404'}/>

    const items = getItemsFromRespone(data)
    // console.log(items);


    const itemCount =items.length;


    return(
        <Box sx={boxStylesFlex(itemCount)}>
            <HomePageGlobalStyle/>        
            {!isMobile && <Box className='officalLogoBox' sx={logoBox}><LogoTitle /><h2>OFICJALNA STRONA ZESPOŁU</h2></Box>}
            {items.map((item,index)=><Grid sx={gridMobileStyles} key={index} xs={12}><HomePageLargeItem media={item}/></Grid>)}
            {/* <Grid xs={12}><Item>1</Item></Grid>
            <Grid sx={{ 'max-width': '100%'}} xs={12}><Item>1</Item></Grid>
            <Grid sx={{ 'max-width': '100%'}} xs={12}><Item>1</Item></Grid> */}
            
        </Box>
)}

export default HomePageLarge;