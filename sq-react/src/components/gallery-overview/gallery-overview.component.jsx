import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
// import Lightbox from 'react-spring-lightbox';

import SpinnerAbsolute from '../spinner/spinner.component';
import GalleryGridLightbox from '../gallery-grid-lightbox/gallery-grid-lightbox.component';

import { GET_GALLERY } from '../../queries/gallery/gallery.querry';
import { getHtmlArrayFromResponse, getJsonArrayFromResponse } from '../../queries/gallery/gallery.process-data';

import {GalleryOverviewStyled} from './gallery-overview.styles';




const GalleryOverview = () => {
    
    // const [currentImageIndex, setCurrentIndex] = useState(0);
    // const [imageLength, setImageLength] = useState(0);
    // let images = [];

    // const gotoPrevious = () =>
    //     currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    // const gotoNext = () =>
    //     currentImageIndex + 1 < images.length &&
    //     setCurrentIndex(currentImageIndex + 1);

    const { loading, error, data } = useQuery(GET_GALLERY);

    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};

    const images = getJsonArrayFromResponse(data);

    return ( 
        <GalleryOverviewStyled>
            <GalleryGridLightbox images={images} imageMasonryDirection="column"/>
        </GalleryOverviewStyled>
    )
}


export default GalleryOverview;