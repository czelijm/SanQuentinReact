import React from 'react';


const VideoPlayer = ({videoUrl,thumbnailUrl,className}) =>{

    const stopMovie = (e) => {
        e.target.pause();
        // console.log('off');
      }
      
    const playMovie = (e) => {
        e.target.play();
        // console.log('on');
      }

    return(
            <video 
                className
                onMouseOver={playMovie}
                onMouseOut={stopMovie}
                src={videoUrl}
                poster={thumbnailUrl}
                preload='none'
                loop    
            />
    )
}

export default VideoPlayer;