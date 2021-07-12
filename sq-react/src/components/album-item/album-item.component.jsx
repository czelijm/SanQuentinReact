import React, { useContext } from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import { AlbumContext } from '../../providers/album/album.provider';

import {AlbumItemComponentStyled,Image, Title,StreamingMediaDiv, Anchor, PlatformIcon, DetailsButton,ButtonDiv} from './album-item.styles';

const AlbumItem = ({album}) => {
    const {pathname} =  useLocation();
    const history = useHistory();
    const {setAlbum} = useContext(AlbumContext);
    
    const {id, title,image,iconArray,mediaPlatformsArray} = album;

    // console.log(pathname);



    return(
        <AlbumItemComponentStyled>
            <Image src={image}/>
            <Title>{title}</Title>
            <StreamingMediaDiv>{iconArray.map((icon,index)=><Anchor key={index} href={mediaPlatformsArray[index]} ><PlatformIcon src={icon} alt="" /></Anchor>)}</StreamingMediaDiv>
            <ButtonDiv>
                {/* <DetailsButton  to={`${pathname}/${id}`}  style={{"width":"100%"}}>Obczai szczegóły!</DetailsButton> */}
                <DetailsButton type="button"  onClick={ ()=>{ setAlbum(album);  history.push( `${pathname}/${id}`)}}  style={{"width":"100%"}}>Obczai szczegóły!</DetailsButton>
            </ButtonDiv>
        </AlbumItemComponentStyled>
    );
}

export default AlbumItem;