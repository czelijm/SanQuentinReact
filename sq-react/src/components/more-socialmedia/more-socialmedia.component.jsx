import React, { useState } from 'react';
import { Anchor, MoreMediaIcon, MoreSocialMediaIconDiv, MoreSocialMediaIconDivHomePage, MoreSocialMediaStyledComponent, PlatformIcon } from './more-socialmedia.styles';

const MoreSocialMediaComponent = ({linksArray, iconArray}) => {

    const [showMedia, setShowMedia] = useState(false)

    return (
        <MoreSocialMediaStyledComponent>
            {iconArray.length>0 && <MoreMediaIcon onClick={()=>{setShowMedia(!showMedia)}}>. . .</MoreMediaIcon>}
            {showMedia && 
                <MoreSocialMediaIconDiv>
                    {iconArray.map(
                        (icon,index)=>
                            <Anchor key={index} href={linksArray[index]} ><PlatformIcon src={icon} alt="" /></Anchor>
                    )}
                </MoreSocialMediaIconDiv>}
        </MoreSocialMediaStyledComponent>
        
    )

}

export const MoreSocialMediaComponentObjectArray = ({array}) => {

    const [showMedia, setShowMedia] = useState(false)

    return (
        <MoreSocialMediaStyledComponent>
            {array.length>0 && <MoreMediaIcon onClick={()=>{setShowMedia(!showMedia)}}>. . .</MoreMediaIcon>}
            {showMedia && 
                <MoreSocialMediaIconDivHomePage>
                    {array.map(
                        (item,index)=>
                            <Anchor key={index} href={item.url} ><PlatformIcon src={item.image} alt="" /></Anchor>
                    )}
                </MoreSocialMediaIconDivHomePage>}
        </MoreSocialMediaStyledComponent>
        
    )

}

export default MoreSocialMediaComponent;