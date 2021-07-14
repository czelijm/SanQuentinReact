import { useQuery } from '@apollo/client';
import React from 'react';
import { getAllFriendsDataFromResponse } from '../../queries/friends/friends.process-data';
import { GET_ALL_FRIENDS } from '../../queries/friends/friends.query';
import SpinnerAbsolute from '../spinner/spinner.component';
import { FriendsOverviewComponentStyled } from './friend-overview.styles';

const FriendsOverview = () => {

    const { loading, error, data } = useQuery(GET_ALL_FRIENDS);
    
    if (loading) return <SpinnerAbsolute/>;
    if (error) {console.log(error); return( <p>Error :(</p>)};

    

    console.log(getAllFriendsDataFromResponse(data))

    return(
        <FriendsOverviewComponentStyled>
            
        </FriendsOverviewComponentStyled>
    )
}

export default FriendsOverview;