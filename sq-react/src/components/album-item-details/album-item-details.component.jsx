import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { AlbumContext } from '../../providers/album/album.provider';
import { GET_ALBUM_BY_ID } from '../../queries/albums/albums.query';

import {useStateWithLocalStorageForJSON, useStateWithSessionStorageForJSON} from '../../hooks/useStateWithStorage/useStateWithStorage'

import {AlbumItemDetailsStyledComponent, Title} from './album-item-details.styles';

const AlbumItemDetails = ({}) => {
    
    const {album} = useContext(AlbumContext);
    const {albumId} = useParams(); 
    
    const [value,setValue] = useStateWithSessionStorageForJSON(albumId);

    if(album && !value) setValue(album);
  
    if(!album && !value) {
        return <Redirect to="/albums" />
    }
    
    console.log(album);
    console.log(value);
    
    
    

    
    return(
        <AlbumItemDetailsStyledComponent>
            <Title>{}</Title>
            {albumId}
        </AlbumItemDetailsStyledComponent>
    )
}

export default AlbumItemDetails;

