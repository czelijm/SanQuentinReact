import React from 'react';
import {useQuery} from '@apollo/client'

import {GigsContainerStyled} from './gigs-container.styles'
import { GET_ALL_GIGS } from '../../queries/gigs/gigs.query';
import SpinnerAbsolute from '../spinner/spinner.component';
import { getAllGigsDataFromResponse, prepareGigsArray } from '../../queries/gigs/gigs.process-data';

const GigsContainer = () =>{
    const { loading, error, data } = useQuery(GET_ALL_GIGS);

    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};

    const gigs = prepareGigsArray(getAllGigsDataFromResponse(data));

    console.log(data);
    console.log(gigs);

    return(
        <GigsContainerStyled>
            Gigs HERE
            {/* {data} */}
        </GigsContainerStyled>
    )
}

export default GigsContainer;