import { useQuery } from '@apollo/client';
import React from 'react';

import SpinnerAbsolute from '../spinner/spinner.component';

import { GET_GALLERY } from '../../queries/gallery/gallery.querry';
import { getHtmlArrayFromResponse } from '../../queries/gallery/gallery.process-data';

import {GalleryOverviewStyled} from './gallery-overview.styles';




const GalleryOverview = () => {
    
    const { loading, error, data } = useQuery(GET_GALLERY);

    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};

    
    
    console.log(getHtmlArrayFromResponse(data));

    return ( 
        <GalleryOverviewStyled>
            
        </GalleryOverviewStyled>
    )
}


export default GalleryOverview;