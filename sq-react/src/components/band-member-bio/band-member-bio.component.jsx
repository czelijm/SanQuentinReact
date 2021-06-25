import React,{useContext} from 'react';

import {BandContext} from '../../providers/band/band.provider';

import {BandMemberBioStyled} from './band-member-bio.styles';

const BandMemberBio = () => {
    
    const {bandMember} = useContext(BandContext); //readed here; setted in band-member-item;

    console.log('choosenBandMember');
    console.log(bandMember);
    return(
        <BandMemberBioStyled>
            {
                bandMember?
                    
                    <div>
                        {bandMember.descriptionArray.map((d,index)=><p key={index}>{d}</p>)}
                        {bandMember.innerImage? <img src={bandMember.innerImage} alt=''/>:<div></div>}
                    </div>
                    :
                    <div>

                    </div>
                
            }
        </BandMemberBioStyled>
    )
}

export default BandMemberBio;
