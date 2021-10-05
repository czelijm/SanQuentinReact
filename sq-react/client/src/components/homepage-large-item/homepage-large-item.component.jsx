import React, { useEffect } from 'react';
// import { Paper, styled } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { HomePageLargeItemStyled, styles } from './homepage-large-item.styles';
import VideoPlayer from '../video-player/video-player.component';
import Cleanwork from '../../assets/Cleanwork.ttf';

import WebFont from 'webfontloader';


const HomePageLargeItem = ({media}) => {     

    //     console.log(Cleanwork)

    //     useEffect(() => {
    //     WebFont.load({
    //         // google: {
    //         //   families: ['Teko:400,500,600,700','Bungee', 'cursive', 'sans-serif'],
    //         // },
    //         custom: {
    //             // families: ['Cleanwork', 'My Other Font:n4,i4,n7'],
    //             families: ['Cleanwork'],
    //             urls: ['./homepage-large-item.font.css']
    //           }
    //      });
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [])

    const classes = makeStyles(styles)();



    const {image, video, name} = media;

    const stopMovie = (e) => {
        e.target.pause();
        // console.log('off');
      }
      
    const playMovie = (e) => {
        e.target.play();
        // console.log('on');
      }

    // console.log(media);
    
    return (
        <HomePageLargeItemStyled className={classes.container}>
            {/* <img className={classes.image} src={image} alt=''/> */}
            <video 
                className={classes.image}
                // onMouseOver={playMovie}
                // onMouseOut={stopMovie}
                src={video}
                poster={image}
                // preload='auto'
                preload='none'
                loop
                muted    
                autoPlay={true}
            />
            <h2 className={classes.bandMemberName}>{name}</h2>
        </HomePageLargeItemStyled>
    )
};


export default HomePageLargeItem;