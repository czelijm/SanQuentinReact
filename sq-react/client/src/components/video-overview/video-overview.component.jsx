import React, {useEffect,useState} from 'react';
import { Redirect } from 'react-router-dom';
// import axios from 'axios'

import SpinnerAbsolute from '../spinner/spinner.component';
import VideoOverviewItem from '../video-overview-item/video-overview-item.component';

import {prepareUrlAndGetApi} from '../../api/youtube/youtubeApi.base'
import {getVideosIdFromResponse } from '../../api/youtube/youtubeApi.process-data';


import {VideoOverviewCoponentStyled} from './video-overview.styles'


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
                // console.log(res);
                // console.log(getVideosPropsFromResponse(res));
                
                setVideos(getVideosIdFromResponse(res));
                // if(error) setError(null);
            } catch (er) {
                setError(er);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
        
    },[]);

    // console.log(videos);
    // console.log(process.env);

    
    if(isLoading) return <SpinnerAbsolute/>;
    if(error) return <Redirect to={'/404'}/>;

    return(

        <VideoOverviewCoponentStyled>
            {/* { displayValue==='none' && <SpinnerAbsolute/> } */}
            {videos && videos.map(v=>
                <VideoOverviewItem key={v} id={v} width="420" height="315"/>
                )
            }
        </VideoOverviewCoponentStyled>
    )
}

export default VideoOverviewComponent;

//<iframe title={v} width="420" height="315" src={`https://www.youtube.com/embed/${v}`}></iframe>
//<VideoOverviewItem key={v} id={v} width="420" height="315"/>

//    {/* <IFrame title={v} width="420" height="315" src={`https://www.youtube.com/embed/${v}`} displayValue={displayValue} onLoad={()=> setDisplayValue('block')}></IFrame> */}

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