import React, { useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';
import { FiHeart, FiPrinter, FiShare } from 'react-icons/fi';
import Lightbox from 'react-spring-lightbox';

import GalleryImage from '../gallery-item/gallery-item.component';
import GalleryButton from '../gallery-button/gallery-button.component';

import {GalleryContainer,LightboxStyled,ImageOverlay} from './gallery-grid-lightbox.styles';
import GalleryLightboxHeader from '../gallery-header/gallery-header.component';

const GalleryGridLightbox = ({images,imageMasonryDirection}) => {
    const [currentImageIndex, setCurrentIndex] = useState(0);

    const [clientSide, setClientSide] = useState(false);
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    // const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {setClientSide(true); }, []);
    

    const openLightbox = (e, { index }) => {
        setCurrentIndex(index);
        setLightboxIsOpen(true);
    };

    const closeLightbox = () => {
        setLightboxIsOpen(false);
    };

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);

        /**
     * Sets breakpoints for column width based on containerWidth
     *
     * @int containerWidth The current width of the image grid
     */
    const columnConfig = (containerWidth) => {
        let columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;

        return columns;
    };

    // console.log(images);

    return (
        <GalleryContainer>
            {clientSide && (
                    <Gallery
                        columns={columnConfig}
                        direction={imageMasonryDirection}
                        margin={6}
                        onClick={openLightbox}
                        photos={images}
                        renderImage={GalleryImage}
                    />
            )}
            <LightboxStyled
                    currentIndex={currentImageIndex}
                    //galleryTitle={galleryTitle}
                    images={images}
                    isOpen={lightboxIsOpen}
                    onClose={closeLightbox}
                    onNext={gotoNext}
                    onPrev={gotoPrevious}
                    renderHeader={() => (
                        <GalleryLightboxHeader
                            currentIndex={currentImageIndex}
                            galleryTitle={""}
                            images={images}
                            onClose={closeLightbox}
                        />
                    )}
                    // renderImageOverlay={() => (
                    //     <ImageOverlay>
                    //         <p>Create your own UI</p>
                    //         <FiPrinter size="3em" />
                    //         <FiShare size="3em" />
                    //         <FiHeart size="3em" />
                    //     </ImageOverlay>
                    // )}
                    renderNextButton={({ canNext }) => (
                        <GalleryButton
                            disabled={!canNext}
                            onClick={gotoNext}
                            position="right"
                        />
                    )}
                    renderPrevButton={({ canPrev }) => (
                        <GalleryButton
                            disabled={!canPrev}
                            onClick={gotoPrevious}
                            position="left"
                        />
                    )}
                    singleClickToZoom
                />
        </GalleryContainer>
    )
}

export default GalleryGridLightbox;


//TO DO
//ADD Header in LightBox
//check required props for image object
