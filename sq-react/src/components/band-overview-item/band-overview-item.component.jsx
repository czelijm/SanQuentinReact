import React from 'react'

import { BandOverviewItemComponent, BandImage, BandInnerImage, BandTitle } from './band-overview-item.styles';


const BandItem = ({bandMember:{title,image,innerImage,descriptionArray}}) => (
    <BandOverviewItemComponent>
        <BandTitle>{title}</BandTitle>
        {image?<BandImage src={image}/>:<div></div>}
        {descriptionArray.map((d,index)=><p key={index}>{d}</p>)}
        {innerImage?<BandInnerImage src={innerImage}/>:<div></div>}
    </BandOverviewItemComponent>
)

export default BandItem;