import React from 'react';
import {Route} from 'react-router-dom';


import GigsContainer from '../../components/gigs-container/gigs-container.component';
import GigsItemDetails from '../../components/gigs-overview-item-details/gigs-overview-item-details.component';


const GigsComponent = ({match}) =>(

    <div className='gigs'>
        <Route exact path={`${match.path}`} component={GigsContainer}></Route>
        <Route path={`${match.path}/:gigId`} render={GigsItemDetails}></Route>
    </div>
)

export default GigsComponent;