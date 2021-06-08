import React from 'react'

import { GigsOverviewItemComponent,GigTitle,GigImage } from './gigs-overview-item.styles';


const GigItem = ({gig:{title,image,descriptionArray}}) => (
    <GigsOverviewItemComponent>
        <GigTitle>{title}</GigTitle>
        {image?<GigImage src={image}/>:<div></div>}
        {descriptionArray.map((d,index)=><p key={index}>{d}</p>)}
    </GigsOverviewItemComponent>
)

export default GigItem;