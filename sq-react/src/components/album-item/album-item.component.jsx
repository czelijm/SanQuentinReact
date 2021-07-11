import React from 'react';

import {AlbumItemComponentStyled,Image, Title} from './album-item.styles';

const AlbumItem = ({album}) => {

    const {id, title,image} = album;

    return(
        <AlbumItemComponentStyled>
            <Image src={image}/>
            <Title>title</Title>
        </AlbumItemComponentStyled>
    );
}

export default AlbumItem;