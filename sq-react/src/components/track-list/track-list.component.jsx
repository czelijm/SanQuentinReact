import React, { useEffect, useState } from 'react';
import { prepareUrlAndGetApi } from '../../api/youtube/youtubeApi.base';
import { getVideosIdFromResponse, getVideosPropsFromResponse } from '../../api/youtube/youtubeApi.process-data';
import SpinnerAbsolute from '../spinner/spinner.component';
import { TrackListStyledComponent } from './track-list.styles';


const TrackListComponent = ({trackListID}) => {
        //like ComponentDidMount
        const [videos,setVideos] = useState([]);  
        const [isLoading,setIsLoading] = useState(true);  
        const [error,setError] = useState(null);  
    
        useEffect(() =>{
            async function fetchData() {
                const options = {
                    part: 'snippet',
                    playlistId:trackListID,
                    key: process.env.REACT_APP_YT_API_KEY
                }
                try {
                    // const res = await ytApi.get('/users');
                    // setVideos(res.data);
                    const api = prepareUrlAndGetApi(`https://youtube.googleapis.com/youtube/v3`,`playlistItems`,options);
                    const res = await api.get();
                    console.log(res);
                    console.log(getVideosPropsFromResponse(res));
                    
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
        // console.log(process.env);
    
        
        if(isLoading) return <SpinnerAbsolute/>;
        if(error) return <div>Error occured :(</div>;
    
    return (
        <TrackListStyledComponent>
            {trackListID}
        </TrackListStyledComponent>
    );
}


export default TrackListComponent;