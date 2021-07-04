import React, {useEffect,useState} from 'react';
// import axios from 'axios'

import SpinnerAbsolute from '../spinner/spinner.component'

import {prepareUrlAndGetApi} from '../../api/youtube/youtubeApi.base'

import {VideoOverviewCoponentStyled} from './video-overview.styles'
import { getVideosIdFromResponse } from '../../api/youtube/youtubeApi.process-data';

const VideoOverviewComponent = () => { 

    //like ComponentDidMount
    const [videos,setVideos] = useState([]);  
    const [isLoading,setIsLoading] = useState(true);  
    const [error,setError] = useState(null);  

    useEffect(() =>{
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        // .then(res => {
        //     setVideos(res.data);
        //     setIsLoading(false);
        // })
        // console.log("Api start");
        async function fetchData() {
            const options = {
                part: 'snippet',
                playlistId:process.env.REACT_APP_YT_CHANNELS_MAIN_PLAYLIST_ID,
                key: process.env.REACT_APP_YT_API_KEY
            }
            try {
                // const res = await ytApi.get('/users');
                // setVideos(res.data);
                const api = prepareUrlAndGetApi(`https://youtube.googleapis.com/youtube/v3`,`playlistItems`,options);
                const res = await api.get();
                // console.log(getVideosIdFromResponse(res));
                setVideos(getVideosIdFromResponse(res));
                if(error) setError(null);
            } catch (er) {
                setError(er);
            } finally {
                setIsLoading(false);
            }
            
        }

        fetchData();
        
    },[]);

    console.log(videos);
    console.log(process.env);

    
    if(isLoading) return <SpinnerAbsolute/>;
    if(error) return <div>Error occured :(</div>;

    return(
        <VideoOverviewCoponentStyled>
            {videos && videos.map(v=><p key={v}>{v}</p>)}
        </VideoOverviewCoponentStyled>
    )
}

export default VideoOverviewComponent;

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