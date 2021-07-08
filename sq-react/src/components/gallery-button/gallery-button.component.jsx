import React from 'react';
import {animated,useTransition} from 'react-spring';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import {Button} from './gallery-button.styled'

const GalleryButton = ({ disabled, onClick, position }) => {
    const transitions = useTransition(!disabled, {
        enter: { opacity: 1 },
        from: { opacity: 0 },
        leave: { opacity: 0 },
    });

    return transitions(
        (props, item) =>
            item && (
                <animated.div
                    style={{
                        ...props,
                        zIndex: 999,
                    }}
                >
                    <Button onClick={onClick} position={position} type="button">
                        {position === 'left' && <IoIosArrowBack />}
                        {position === 'right' && <IoIosArrowForward />}
                    </Button>
                </animated.div>
            )
    );
};

export default GalleryButton;

