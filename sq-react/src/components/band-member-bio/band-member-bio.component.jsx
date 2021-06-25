import React,{useContext} from 'react';

import {BandContext} from '../../providers/band/band.provider';

import {BandMemberBioStyled} from './band-member-bio.styles';

const BandMemberBio = () => {
    
    const {bandMember} = useContext(BandContext); //readed here; setted in band-member-item;

    console.log('choosenBandMember');
    console.log(bandMember);
    
    return(
        <BandMemberBioStyled>
            <p>Some BIO</p>
        </BandMemberBioStyled>
    )
}

export default BandMemberBio;
