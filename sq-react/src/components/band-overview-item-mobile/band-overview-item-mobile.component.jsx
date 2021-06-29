import React, {useContext} from 'react';
import {Carousel} from 'react-bootstrap';


import {BandContext} from '../../providers/band/band.provider';

import { BandOverviewItemComponent, BandImage, BandInnerImage, BandTitle, MobileImage} from './band-overview-item-mobile.styles';


// const BandItem = ({bandMember:{title,image,innerImage,descriptionArray}}) => { 
const BandItemMobile = ({bandMember}) => { 
    
    const {title,innerImage,descriptionArray} = bandMember;
    
    return(
        <Carousel.Item interval={5000}>
            <MobileImage
                // className="d-block w-100 h-75"
                    src={innerImage}
                    alt="Band Memeber"
                />
            <br/>
            <br/>
            <br/>
            <br/>
            <Carousel.Caption>
            <h3>{title}</h3>
            <p>{descriptionArray}</p>
            <br/>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export default BandItemMobile;