import React, { useState } from 'react';
import {Spinner} from 'react-bootstrap';


import {VideoOverviewComponentStyled,IFrame,SpinnerDiv,SpinnerDescription} from './video-overview-item.styles';

const VideoOverviewItem = ({id,width,height}) =>{

    const [displayValue,setDisplayValue] = useState('none');  

    return (
    <VideoOverviewComponentStyled>
        { displayValue==='none' &&
            <SpinnerDiv>
                <Spinner animation="grow" variant="light"/>
                <SpinnerDescription>Fetching data from Youtube...</SpinnerDescription>
            </SpinnerDiv>
        }
        {
            <IFrame width={width} height={height} src={`https://www.youtube.com/embed/${id}`} displayValue={displayValue} onLoad={()=> setDisplayValue('block')}/>
        }
    </VideoOverviewComponentStyled>
    )
}

export default VideoOverviewItem;