import React from 'react';

import {ImageContainer,OverlayContainer,Image,Caption} from './gallery-item.styles';


const GalleryImage = ({ index, key, left, onClick, photo, top }) => {
    const { alt, caption, height, src, width } = photo;
    return (
        <ImageContainer
            index={index}
            key={`${key}-${index}`}
            onClick={(e) => onClick(e, { index })}
            style={{ height, left, top, width }}
        >
            <OverlayContainer>
                <Image alt={alt} caption={caption} src={src} />
                <Caption>
                    <h4>{caption}</h4>
                </Caption>
            </OverlayContainer>
        </ImageContainer>
    );
};

export default GalleryImage;
