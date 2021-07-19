import React, { useState } from 'react';
import {Spinner} from 'react-bootstrap';
import waitGit from '../../assets/wait.gif';

import {VideoOverviewComponentStyled,IFrame,SpinnerDiv,SpinnerDescription, WaitingGif} from './video-overview-item.styles';

const VideoOverviewItem = ({id,width,height}) =>{

    const [displayValue,setDisplayValue] = useState('none');  

    return (
    <VideoOverviewComponentStyled>
        { displayValue==='none' &&
            <SpinnerDiv>
                {/* <Spinner animation="grow" variant="light"/> */}
                <WaitingGif src={waitGit} alt=''/>
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