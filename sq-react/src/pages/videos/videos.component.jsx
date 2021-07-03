import React from 'react';

import VideoOverviewComponent from '../../components/video-overview/video-overview.component';


const VideoComponent = () => { 

    return(
        <div>
            <VideoOverviewComponent/>
        </div>
    )
}

export default VideoComponent;

//2 ways
// //1. 
// 1.1.make main playlist 
// 1.2 yt API -> get user's playlist id
// 1.3 yt API -> get list of videos id's from playlist   
// //2. 
// 2.1.make main playlist 
// 2.2 Hardcode playlist id in the app
// 2 .3 yt API -> get list of videos id's from playlist
// AIzaSyC8k1ehXRjE9VC5CvwtsKg4mdO9zZB47sA