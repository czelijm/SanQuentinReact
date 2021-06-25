import React, {useContext} from 'react'

import {BandContext} from '../../providers/band/band.provider';

import { BandOverviewItemComponent, BandImage, BandInnerImage, BandTitle } from './band-overview-item.styles';


// const BandItem = ({bandMember:{title,image,innerImage,descriptionArray}}) => { 
const BandItem = ({bandMember}) => { 
    
    const {title,image,innerImage,descriptionArray} = bandMember;
    const {setBandMember} = useContext(BandContext);
    
    return(
        <BandOverviewItemComponent>
            <BandTitle>{title}</BandTitle>
            {image?<BandImage src={image} onClick={()=>setBandMember(bandMember)}/>:<div></div>}
            {/* {descriptionArray.map((d,index)=><p key={index}>{d}</p>)}
            {innerImage?<BandInnerImage src={innerImage}/>:<div></div>} */}
        </BandOverviewItemComponent>
    )
}

export default BandItem;