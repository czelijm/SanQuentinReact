import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_BANDMEMBERS } from '../../queries/band-members/band-members.query';
import SpinnerAbsolute from '../spinner/spinner.component';

import {BandComponent,ChooseYourMemberMessage} from './band-container.styles';
import BandOverview from '../band-overview/band-overview.component';
import BandMemberBio from '../band-member-bio/band-member-bio.component';

import { getAllBandMembersDataFromResponse,  prepareBandMembersArray } from '../../queries/band-members/band-members.process-data';
import { useWindowSize } from '../../hooks/useWindowSize/useWindowSize';
import { BandContext } from '../../providers/band/band.provider';

const BandContainer = () => {
    const { loading, error, data } = useQuery(GET_ALL_BANDMEMBERS);
    const [,,isMobile] = useWindowSize();
    const {isClicked} = useContext(BandContext);


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
            {!isMobile && !isClicked && <ChooseYourMemberMessage>Wybierz czonka SQ i kliknij!!!</ChooseYourMemberMessage>}
            <BandOverview band={band}/>
            {!isMobile && <BandMemberBio/>}
            
        </BandComponent>
)}

export default BandContainer