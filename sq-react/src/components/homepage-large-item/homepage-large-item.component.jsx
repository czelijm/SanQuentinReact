import React from 'react';
// import { Paper, styled } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { HomePageLargeItemStyled, styles } from './homepage-large-item.styles';




const HomePageLargeItem = ({media}) => {     
    
    const classes = makeStyles(styles)();

    const {image, video} = media;

    console.log(media);
    
    return (
        <HomePageLargeItemStyled className={classes.transform} >
            <img className={classes.image} src={image} alt=''/>
        </HomePageLargeItemStyled>
    )
};


export default HomePageLargeItem;