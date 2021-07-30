import React, { useState } from 'react';
import {Spinner} from 'react-bootstrap';
import waitGit from '../../assets/wait.gif';
import { SpinnerAdjustable } from '../spinner/spinner.component';

import {VideoOverviewComponentStyled,IFrame} from './video-overview-item.styles';

const VideoOverviewItem = ({id,width,height}) =>{

    const [displayValue,setDisplayValue] = useState('none');  

    return (
    <VideoOverviewComponentStyled>
        { displayValue==='none' && <SpinnerAdjustable/>
        }
        {
            <IFrame width={width} height={height} src={`https://www.youtube.com/embed/${id}`} displayValue={displayValue} onLoad={()=> setDisplayValue('block')}/>
        }
    </VideoOverviewComponentStyled>
    )
}

export default VideoOverviewItem;