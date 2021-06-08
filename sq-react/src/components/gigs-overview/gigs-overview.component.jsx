import React from 'react'
import GigItem from '../gigs-overview-item/gigs-overview-item.component';

import { GigsOverviewComponent } from './gigs-overview.styles';


const GigsOverview = ({gigs}) => (
    <GigsOverviewComponent>
        {gigs.map(g=><GigItem key={g.id} gig={g}/>)}
    </GigsOverviewComponent>
)

export default GigsOverview;