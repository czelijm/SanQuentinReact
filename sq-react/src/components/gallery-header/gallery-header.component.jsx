import React from 'react';
import { IoIosClose } from 'react-icons/io';

import { CloseButton, GalleryHeading, GallerySubheading, LeftSideDescriptionContainer, PageIndicator, RightSideContainer, TopHeaderBar } from './gallery-header.styles'

const GalleryLightboxHeader = ({ currentIndex, galleryTitle, images, onClose }) => (
    <TopHeaderBar>
        <LeftSideDescriptionContainer>
            {/* <GalleryHeading>{galleryTitle}</GalleryHeading> */}
            {/* <GallerySubheading> */}
                {/* {images[currentIndex].caption} */}
            {/* </GallerySubheading>     */}
        </LeftSideDescriptionContainer>

        <RightSideContainer>
            <PageIndicator>
                {currentIndex + 1} / {images.length}
            </PageIndicator>
            <CloseButton onClick={onClose} type="button">
                <IoIosClose size={60} style={{color:"red"}}/>
            </CloseButton>
        </RightSideContainer>
    </TopHeaderBar>
);

export default GalleryLightboxHeader;