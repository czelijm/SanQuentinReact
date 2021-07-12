import React from 'react';
import { useParams } from 'react-router-dom';

import {AlbumItemDetailsStyledComponent} from './album-item-details.styles';

const AlbumItemDetails = ({album}) => {
    
    // const {playlistId}
    console.log(album);
    
    const {albumId} = useParams(); 
    
    return(
        <AlbumItemDetailsStyledComponent>
            {albumId}
        </AlbumItemDetailsStyledComponent>
    )
}

export default AlbumItemDetails;

