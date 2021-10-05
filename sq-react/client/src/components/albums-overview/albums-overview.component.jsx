import { useQuery } from '@apollo/client';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { getAlbumsFromResponse} from '../../queries/albums/albums.process-data';
import { GET_ALL_ALBUMS } from '../../queries/albums/albums.query';
import AlbumItem from '../album-item/album-item.component';
import SpinnerAbsolute from '../spinner/spinner.component';

import {AlbumsOverviewComponentStyled} from './albums-overview.styles'

const AlbumsOverview = () => {
    
    const { loading, error, data } = useQuery(GET_ALL_ALBUMS);

    if (loading) return <SpinnerAbsolute/>;
    if (error) return <Redirect to={'/404'}/>
    
    const albums = getAlbumsFromResponse(data);

    // console.log(albums);
    

    return(
        <AlbumsOverviewComponentStyled>
            <h2 style={{textAlign:"left"}}>Dyskografia</h2>
            {albums.map(a=><AlbumItem key={a.id} album={a}/>)}
        </AlbumsOverviewComponentStyled>
    )
}

export default AlbumsOverview;