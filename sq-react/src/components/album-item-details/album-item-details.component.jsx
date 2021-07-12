import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumContext } from '../../providers/album/album.provider';

import {AlbumItemDetailsStyledComponent} from './album-item-details.styles';

const AlbumItemDetails = ({}) => {
    
    // const {playlistId}
    const {album} = useContext(AlbumContext);

    console.log(album);
    
    const {albumId} = useParams(); 
    
    return(
        <AlbumItemDetailsStyledComponent>
            XD
            {albumId}
        </AlbumItemDetailsStyledComponent>
    )
}

export default AlbumItemDetails;

