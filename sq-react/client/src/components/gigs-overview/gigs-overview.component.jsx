import React from 'react'
import GigItem from '../gigs-overview-item/gigs-overview-item.component';

import { GigsOverviewComponent } from './gigs-overview.styles';

const splitDate = (d) => d.split('.').reverse();

const compareStringDate = (dateA,dateB) => {
    let a = new Date(splitDate(dateA).valueOf());
    let b = new Date(splitDate(dateB).valueOf());

    return (
        isFinite(a) &&
        isFinite(b) ?
        (a>b)-(a<b) :
        NaN
    );
}

const compareObjects = (a,b) => {
    return compareStringDate(a.descriptionArray[1],b.descriptionArray[1])
}



const GigsOverview = ({gigs}) => {

    gigs.sort(compareObjects);

    return(
        <GigsOverviewComponent>
            {gigs.map(g=><GigItem key={g.id} gig={g}/>)}
        </GigsOverviewComponent>
)}

export default GigsOverview;