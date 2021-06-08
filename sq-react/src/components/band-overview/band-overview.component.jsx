import React from 'react'
import BandItem from '../band-overview-item/band-overview-item.component';

import {BandOverviewComponent} from './band-overview.styles'

const BandOverview = ({band}) => {
    return(
        <BandOverviewComponent>
            {band.map((m,index)=><BandItem key={index} bandMember={m}/>)}
        </BandOverviewComponent>
    )
}

export default BandOverview;