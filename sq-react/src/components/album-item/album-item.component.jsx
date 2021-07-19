import React, { useContext } from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import { AlbumContext } from '../../providers/album/album.provider';
import MoreSocialMediaComponent from '../more-socialmedia/more-socialmedia.component';

import {AlbumItemComponentStyled,Image, Title,StreamingMediaDiv, Anchor, PlatformIcon, DetailsButton,ButtonDiv, BackgroundImage} from './album-item.styles';

const AlbumItem = ({album}) => {
    const {pathname} =  useLocation();
    const history = useHistory();
    const {setAlbum} = useContext(AlbumContext);
    
    const {id, title,image,iconArray,mediaPlatformsArray} = album;

    // console.log(pathname);



    return(
        <AlbumItemComponentStyled>
            <BackgroundImage src={"https://cdn.pixabay.com/photo/2014/05/06/14/15/metal-shelf-338882_960_720.jpg"}/>
            <Image src={image}/>
            <Title>{title}</Title>
            <StreamingMediaDiv>
                {iconArray.slice(0,3).map((icon,index)=><Anchor key={index} href={mediaPlatformsArray[index]} ><PlatformIcon src={icon} alt="" /></Anchor>)}
                <MoreSocialMediaComponent linksArray={mediaPlatformsArray.slice(3)} iconArray={iconArray.slice(3)}/>
            </StreamingMediaDiv>
            <ButtonDiv>
                {/* <DetailsButton  to={`${pathname}/${id}`}  style={{"width":"100%"}}>Obczai szczegóły!</DetailsButton> */}
                <DetailsButton type="button"  onClick={ ()=>{ setAlbum(album);  history.push( `${pathname}/${id}`)}}  style={{"width":"100%"}}>Obczai szczegóły!</DetailsButton>
            </ButtonDiv>
        </AlbumItemComponentStyled>
    );
}

export default AlbumItem;