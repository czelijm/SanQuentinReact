import React, { useContext } from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import { AlbumContext } from '../../providers/album/album.provider';
import MoreSocialMediaComponent from '../more-socialmedia/more-socialmedia.component';

import {AlbumItemComponentStyled,Image, Title,StreamingMediaDiv, Anchor, PlatformIcon, DetailsButton,ButtonDiv, BackgroundImage} from './album-item.styles';
import metalShelf from '../../assets/metal-shelf.jpg';

const AlbumItem = ({album}) => {
    const {pathname} =  useLocation();
    const history = useHistory();
    const {setAlbum} = useContext(AlbumContext);
    
    const {id, title,image,iconArray,mediaPlatformsArray} = album;

    // console.log(pathname);



    return(
        <AlbumItemComponentStyled>
            <BackgroundImage src={metalShelf}/>
            <Image src={image}/>
            <Title>{title}</Title>
            <StreamingMediaDiv>
                {iconArray.slice(0,3).map((icon,index)=><Anchor key={index} href={mediaPlatformsArray[index]} ><PlatformIcon src={icon} alt="" /></Anchor>)}
                <MoreSocialMediaComponent linksArray={mediaPlatformsArray.slice(3)} iconArray={iconArray.slice(3)}/>
            </StreamingMediaDiv>
            <ButtonDiv>
                {/* <DetailsButton  to={`${pathname}/${id}`}  style={{"width":"100%"}}>Obczaj szczegóły!</DetailsButton> */}
                <DetailsButton type="button"  onClick={ ()=>{ setAlbum(album);  history.push( `${pathname}/${id}`)}}  style={{"width":"100%"}}>Obczaj szczegóły!</DetailsButton>
            </ButtonDiv>
        </AlbumItemComponentStyled>
    );
}

export default AlbumItem;