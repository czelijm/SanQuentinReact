import React from 'react';

import {VideoOverviewComponentStyled,IFrame} from './video-overview-item.styles';

const VideoOverviewItem = ({id,width,height}) =>{
    return (
    // <VideoOverviewComponentStyled>
        <IFrame width={width} height={height} src={`https://www.youtube.com/embed/${id}`}></IFrame>
    // </VideoOverviewComponentStyled>
    )
}

export default VideoOverviewItem;