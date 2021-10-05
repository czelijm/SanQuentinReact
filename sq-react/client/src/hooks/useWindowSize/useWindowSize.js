import React, {useState,useEffect} from 'react';
import {MOBILE_WIDTH} from '../../utilities/constants'

export function useWindowSize(){
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleWindowSizeChange() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

    useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);

    
    return [width,height,width<=MOBILE_WIDTH]
} 
