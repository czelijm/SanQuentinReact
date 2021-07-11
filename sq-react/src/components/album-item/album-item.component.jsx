import React from 'react';

import {AlbumItemComponentStyled} from './album-item.styles';

const AlbumItem = ({album}) => {

    const {id} = album;

    return(
        <AlbumItemComponentStyled>
            {id}
        </AlbumItemComponentStyled>
    );
}

export default AlbumItem;