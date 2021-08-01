import React,{useContext, useEffect, useState} from 'react';

import {BandContext} from '../../providers/band/band.provider';
import { BackgroundImage } from '../backgorund-image/background-image.styles';

import {BandMemberBioStyled, ImageCol, InfoCol, BandMemberTitle,BioRow,BandMemberImage,BandMemberDescription,DescriptionDiv, BandMemberImageDiv, BandMemberBioDescriptionContainer} from './band-member-bio.styles';
import metalShelf from '../../assets/metal-shelf.jpg';

const BandMemberBio = () => {
    
    const {bandMember,isClicked} = useContext(BandContext); //readed here; setted in band-member-item;
    const [img, setImg] = useState(null);
    useEffect(() => {
        if(bandMember)
            setImg(bandMember.innerImage)
        // return () => {
        //     cleanup
        // }
    }, [bandMember])


    console.log('choosenBandMember');
    console.log(img);
    console.log(isClicked);


    return(
        <BandMemberBioStyled>
            {
                bandMember &&//?
                    
                    <BandMemberBioDescriptionContainer>
                        <BackgroundImage src={metalShelf}/>
                        <BioRow>
                            <ImageCol xs={12}  lg={{ span: 6, offset: 0 }}>
                                {bandMember.innerImage && <BandMemberImage src={bandMember.innerImage} alt=''/>}
                                {/* {bandMember.innerImage && <BandMemberImageDiv src={img}/>} */}
                            </ImageCol>
                            <InfoCol xs={12}  lg={{ span: 6, offset: 0 }}>
                                <BandMemberTitle>{bandMember.title}</BandMemberTitle>
                                <br/>
                                <DescriptionDiv>
                                    {bandMember.descriptionArray.map((d,index)=><BandMemberDescription key={index}>{d}</BandMemberDescription>)}
                                </DescriptionDiv>
                            </InfoCol>
                        </BioRow>
                    </BandMemberBioDescriptionContainer>

                
            }
        </BandMemberBioStyled>
    )
}

export default BandMemberBio;
