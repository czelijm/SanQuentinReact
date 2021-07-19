import React from 'react';
// import { Paper, styled } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { HomePageLargeItemStyled, styles } from './homepage-large-item.styles';
import VideoPlayer from '../video-player/video-player.component';




const HomePageLargeItem = ({media}) => {     
    
    const classes = makeStyles(styles)();

    const {image, video} = media;

    const stopMovie = (e) => {
        e.target.pause();
        console.log('off');
      }
      
    const playMovie = (e) => {
        e.target.play();
        console.log('on');
      }

    // console.log(media);
    
    return (
        <HomePageLargeItemStyled className={classes.transform} >
            {/* <img className={classes.image} src={image} alt=''/> */}
            <video 
                className={classes.image}
                onMouseOver={playMovie}
                onMouseOut={stopMovie}
                src={video}
                poster={image}
                preload='auto'
                loop
                muted    
            />
        </HomePageLargeItemStyled>
    )
};


export default HomePageLargeItem;