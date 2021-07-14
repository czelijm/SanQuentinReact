import React, { useState } from 'react';
import { Anchor, MoreMediaIcon, MoreSocialMediaIconDiv, MoreSocialMediaStyledComponent, PlatformIcon } from './more-socialmedia.styles';

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

export default MoreSocialMediaComponent;