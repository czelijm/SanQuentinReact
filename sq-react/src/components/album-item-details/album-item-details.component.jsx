import React, { useContext} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { AlbumContext } from '../../providers/album/album.provider';

import {useStateWithSessionStorageForJSON} from '../../hooks/useStateWithStorage/useStateWithStorage'

import {AlbumItemDetailsStyledComponent, Anchor, Image, PlatformIcon, StreamingMediaDiv, Title} from './album-item-details.styles';
import TrackListComponent from '../track-list/track-list.component';

const AlbumItemDetails = () => {
    
    
    const {album} = useContext(AlbumContext);
    const {albumId} = useParams(); 
    
    const [value,setValue] = useStateWithSessionStorageForJSON(albumId);

    if(!album && !value) {
        return <Redirect to="/albums" />
    }
    
    if(album && !value) setValue(album);
    // console.log(album);
    // console.log(value);

    const {title,iconArray,mediaPlatformsArray,image,playlistId} = album?album:value;    
    
    return(
        <AlbumItemDetailsStyledComponent>
            <Image src={image}/>
            <Title>{title}</Title>
            <StreamingMediaDiv>{iconArray.map((icon,index)=><Anchor key={index} href={mediaPlatformsArray[index]} ><PlatformIcon src={icon} alt="" /></Anchor>)}</StreamingMediaDiv>
            <TrackListComponent trackListID={playlistId}/>
        </AlbumItemDetailsStyledComponent>
    )
}

export default AlbumItemDetails;

