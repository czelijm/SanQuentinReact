import React,{useContext} from 'react';

import {BandContext} from '../../providers/band/band.provider';

import {BandMemberBioStyled, ImageCol, InfoCol, BandMemberTitle,BioRow,BandMemberImage,BandMemberDescription,DescriptionDiv} from './band-member-bio.styles';

const BandMemberBio = () => {
    
    const {bandMember,isClicked} = useContext(BandContext); //readed here; setted in band-member-item;

    console.log('choosenBandMember');
    console.log(bandMember);
    console.log(isClicked);
    return(
        <BandMemberBioStyled>
            {
                bandMember &&//?
                    
                    <div>
                        <BioRow>
                            <ImageCol xs={12}  lg={{ span: 6, offset: 0 }}>
                                {bandMember.innerImage && <BandMemberImage src={bandMember.innerImage} alt=''/>}
                            </ImageCol>
                            <InfoCol xs={12}  lg={{ span: 6, offset: 0 }}>
                                <BandMemberTitle>{bandMember.title}</BandMemberTitle>
                                <br/>
                                <DescriptionDiv>
                                    {bandMember.descriptionArray.map((d,index)=><BandMemberDescription key={index}>{d}</BandMemberDescription>)}
                                </DescriptionDiv>
                            </InfoCol>
                        </BioRow>
                    </div>

                
            }
        </BandMemberBioStyled>
    )
}

export default BandMemberBio;
