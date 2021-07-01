import React from 'react'
import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';

import SpinnerAbsolute from '../spinner/spinner.component'

import { GET_GIG_BY_ID } from '../../queries/gigs/gigs.query';
import { getGigsDataFromResponse } from '../../queries/gigs/gigs.process-data';

import {GigsOverviewItemDetailsComponent,DetailsTitle} from './gigs-overview-item-details.styles';


const GigsItemDetails = () => {

    const {gigId} = useParams(); 
    // console.log(gigId);
   
    const { loading, error, data } = useQuery(GET_GIG_BY_ID, {variables:{id:gigId}});

    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};    

    const postContent = getGigsDataFromResponse(data);

    // console.log(postContent);

    return(
        <GigsOverviewItemDetailsComponent>
        <DetailsTitle>{postContent.title}</DetailsTitle>
             <div dangerouslySetInnerHTML={{ __html: postContent.content }} />
        </GigsOverviewItemDetailsComponent>
    )
}

export default GigsItemDetails;