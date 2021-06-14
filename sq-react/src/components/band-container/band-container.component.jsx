import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_BANDMEMBERS } from '../../queries/band-members/band-members.query';
import SpinnerAbsolute from '../spinner/spinner.component';

import {BandComponent} from './band-container.styles';
import BandOverview from '../band-overview/band-overview.component';
import { getAllBandMembersDataFromResponse,  prepareBandMembersArray } from '../../queries/band-members/band-members.process-data';

const BandContainer = () => {
    const { loading, error, data } = useQuery(GET_ALL_BANDMEMBERS);

    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};

    const band = prepareBandMembersArray(getAllBandMembersDataFromResponse(data));


    console.log(band);
    // console.log(getTagElementArrayFromStringContent(band[0].content, 'img'));
    // console.log(prepareBandMember(band[0]));
    // console.log(prepareBandMembersArray(band));

    return(
        <BandComponent>
            {/* <h2>Band Menbers</h2> */}
            <BandOverview band={band}/>
        </BandComponent>
)}

export default BandContainer