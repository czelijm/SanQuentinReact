import React from 'react';
import { useLocation} from 'react-router-dom';

import {AlbumItemComponentStyled,Image, Title,StreamingMediaDiv, Anchor, PlatformIcon, DetailsButton,ButtonDiv} from './album-item.styles';

const AlbumItem = ({album}) => {
    const {pathname} =  useLocation();
    const {id, title,image,iconArray,mediaPlatformsArray} = album;

    return(
        <AlbumItemComponentStyled>
            <Image src={image}/>
            <Title>{title}</Title>
            <StreamingMediaDiv>{iconArray.map((icon,index)=><Anchor href={mediaPlatformsArray[index]} ><PlatformIcon src={icon} alt="" /></Anchor>)}</StreamingMediaDiv>
            <ButtonDiv>
                <DetailsButton  to={`${pathname}/${id}`} style={{"width":"100%"}}>Obczai szczegóły!</DetailsButton>
            </ButtonDiv>
        </AlbumItemComponentStyled>
    );
}

export default AlbumItem;