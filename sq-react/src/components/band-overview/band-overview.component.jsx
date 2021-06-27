import React from 'react'
import BandItem from '../band-overview-item/band-overview-item.component';

import {useWindowSize} from '../../hooks/useWindowSize/useWindowSize'

import {BandOverviewComponent} from './band-overview.styles'


const BandOverview = ({band}) => {

    // const [x,y,isMobile] = useWindowSize();
    const [,,isMobile] = useWindowSize();

    console.log(isMobile);

    return(
        <BandOverviewComponent>
            {band.map((m,index)=><BandItem key={index} bandMember={m}/>)}
        </BandOverviewComponent>
    )
}

export default BandOverview;