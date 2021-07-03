import React, {useEffect,useState} from 'react';
import axios from 'axios'

import SpinnerAbsolute from '../spinner/spinner.component'

import ytApi from '../../api/youtube/youtubeApi'

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
            
            // console.log("Api start");

            
            // console.log("Api stop");
            
            try {
                const res = await ytApi.get('/users');

                setVideos(res.data);
                setError(null);
            } catch (er) {
                setError(er);
            } finally {
                setIsLoading(false);
            }
            
        }

        fetchData();
        

    },[]);

    console.log(videos);
    
    if(isLoading) return <SpinnerAbsolute/>;
    if(error) return <div>Error occured :(</div>;

    return(
        <VideoOverviewCoponentStyled>
            Some Videos 
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