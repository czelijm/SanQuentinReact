import React from 'react';
import {useQuery} from '@apollo/client'

import {GigsContainerStyled} from './gigs-container.styles'
import { GET_ALL_GIGS } from '../../queries/gigs/gigs.query';
import SpinnerAbsolute from '../spinner/spinner.component';
import { getAllGigsDataFromResponse, prepareGigsArray } from '../../queries/gigs/gigs.process-data';
import GigsOverview from '../gigs-overview/gigs-overview.component';

const GigsContainer = () =>{
    const { loading, error, data } = useQuery(GET_ALL_GIGS);

    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};

    const gigs = prepareGigsArray(getAllGigsDataFromResponse(data));

    // console.log(data);
    console.log(gigs);

    return(
        <div>
            <h2>Koncerty:</h2>
            <br/>
            <GigsContainerStyled>
                {/* Gigs HERE */}
                <GigsOverview gigs={gigs}/>
                {/* {data} */}
            </GigsContainerStyled>
        </div>
    )
}

export default GigsContainer;