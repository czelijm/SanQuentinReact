import { useQuery } from '@apollo/client';
import React from 'react';
import { Redirect } from 'react-router-dom';
import FriendsOverview from '../../components/friend-overview/friend-overview.component';
import SpinnerAbsolute from '../../components/spinner/spinner.component';
import { getAllFriendsDataFromResponse, prepareFirends } from '../../queries/friends/friends.process-data';
import { GET_ALL_FRIENDS } from '../../queries/friends/friends.query';

const FriendsComponent = () => {

    const { loading, error, data } = useQuery(GET_ALL_FRIENDS);
    
    if (loading) return <SpinnerAbsolute/>;
    if (error) return <Redirect to={'/404'}/>

    const friends = prepareFirends(getAllFriendsDataFromResponse(data));

    // console.log(friends);

    return(
        <div>
            <h2>Przyjaciele i kooperacje</h2>
            <FriendsOverview items={friends}/>
        </div>
    );
}

export default FriendsComponent;