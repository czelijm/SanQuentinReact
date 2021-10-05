import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { prepareUrlAndGetApi } from '../../api/youtube/youtubeApi.base';
import { getVideosIdFromResponse, getVideosPropsFromResponse } from '../../api/youtube/youtubeApi.process-data';
import SpinnerAbsolute from '../spinner/spinner.component';
import { TrackItem, TrackListStyledComponent } from './track-list.styles';


const TrackListComponent = ({trackListID}) => {
        //like ComponentDidMount
        const [videos,setVideos] = useState([]);  
        const [isLoading,setIsLoading] = useState(true);  
        const [error,setError] = useState(null);  
        const history = useHistory();
    
        useEffect(() =>{
            async function fetchData() {
                const options = {
                    part: 'snippet',
                    playlistId:trackListID,
                    key: process.env.REACT_APP_YT_API_KEY,
                    maxResults:25,
                }
                try {
                    // const res = await ytApi.get('/users');
                    // setVideos(res.data);
                    const api = prepareUrlAndGetApi(`https://youtube.googleapis.com/youtube/v3`,`playlistItems`,options);
                    const res = await api.get();
                    // console.log(res);
                    // console.log(getVideosPropsFromResponse(res));
                    
                    setVideos(getVideosPropsFromResponse(res));
                    if(error) setError(null);
                } catch (er) {
                    setError(er);
                } finally {
                    setIsLoading(false);
                }
                
            }
    
            fetchData();
            
        },[]);
    
        console.log(videos[0]?.title.split('-'));
        // console.log(process.env);
        // console.log(trackListID);
    
        
        if(isLoading) return <SpinnerAbsolute/>;
        if(error) return <div>Error occured :(</div>;
    
    return (
        <TrackListStyledComponent>
            {videos.map((v,i)=><TrackItem onClick={() => { 
                window.location.href = `https://www.youtube.com/watch?v=${v.id}`; 
                return null;
            }} 
            key={i}>
                {v.title.split('-')[0]==="SAN QUENTIN "?v.title.split('-')[1]:v.title.split('-')[0]}
            </TrackItem>)}
        </TrackListStyledComponent>
    );
}


export default TrackListComponent;