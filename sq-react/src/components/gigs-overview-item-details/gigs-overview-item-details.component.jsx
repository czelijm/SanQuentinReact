import React from 'react'
import {Redirect, useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';

import SpinnerAbsolute from '../spinner/spinner.component'

import { GET_GIG_BY_ID } from '../../queries/gigs/gigs.query';
import { getGigsDataFromResponse } from '../../queries/gigs/gigs.process-data';

import {GigsOverviewItemDetailsComponent,DetailsTitle, HtmlContentDiv} from './gigs-overview-item-details.styles';


const GigsItemDetails = () => {

    const {gigId} = useParams(); 
    // console.log(gigId);
   
    const { loading, error, data } = useQuery(GET_GIG_BY_ID, {variables:{id:gigId}});

    if (loading) return <SpinnerAbsolute/>;
    if (error) return <Redirect to={'/404'}/>    

    const postContent = getGigsDataFromResponse(data);

    // console.log(postContent);

    return(
        <GigsOverviewItemDetailsComponent>
            <DetailsTitle>{postContent.title}</DetailsTitle>
            <HtmlContentDiv dangerouslySetInnerHTML={{ __html: postContent.content }} />
        </GigsOverviewItemDetailsComponent>
    )
}

export default GigsItemDetails;